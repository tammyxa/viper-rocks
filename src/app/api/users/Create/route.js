import { NextResponse } from "next/server"; // NextResponse for sending responses as json objects
import { hash } from "bcrypt";              //bcrypt for hashing and salting passwords 
import prisma from "../../../lib/prisma";   //prisma configuration file



// Should be a POST request, GET not allowed
export async function GET(req) {
  return NextResponse.json(
    { error: "Method not allowed" },
    {
      status: 405,
    }
  );
}


// Create a new user
export async function POST(req) {

  try {
    // Get the user data from the request
    const body = await req.json();
    const { username, email, passwordHash } = body;


    // Confirm email and password data exists
    if (!email || !passwordHash) {
      return NextResponse.json(
        {
          message: "Email and Password are required",
          email,
          passwordHash,
          username,
        },
        { status: 401 }
      );
    };
    
    
    // Check for duplicate emails case-insensitively using Prisma
    const duplicateUser = await prisma.user.findUnique({
      where: {
        email: email.toLowerCase(),
      },
    });


    // If duplicate user exists, return error
    if (duplicateUser) {
      return NextResponse.json(
        { message: "Email already exists", user: null},
        { status: 409 }
      );
    }
    

   

    // Hash the password
    const hashedPassword = await hash(passwordHash, 10);

   


    // Create the user with the email, username, and hashed password
    const newUser = await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
        username: username,
      },
    });

    // Return the new user
    return NextResponse.json(
      { message: "User Created.", user: newUser },
      { status: 201 }
    );
  } catch (error) {
    // If there is an error, return the error. This could be a Prisma error or a server error. In my experience, Prisma errors are more common.
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    // Disconnect from the Prisma client
    await prisma.$disconnect();
  }

}

// if error returned is "prisma validation error, there is an issue with one of the queries and\or its parameters"