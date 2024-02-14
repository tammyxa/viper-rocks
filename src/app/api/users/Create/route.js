import { NextResponse } from "next/server";
import { hash } from "bcrypt";
//import { PrismaClient } from "@prisma/client";
import prisma from "../../../lib/prisma";

//const { PrismaClient } = require('@prisma/client');

//const prisma = new PrismaClient();

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


    // Confirm data exists
    if (!email || !passwordHash) {
      return NextResponse.json(
        {
          message: "Email and Password are required foo",
          email,
          passwordHash,
          username,
        },
        { status: 401 }
      );
    };
    
    /*
    // Check for duplicate emails case-insensitively using Prisma
    const duplicateUser = await prisma.user.findUnique({
      where: {
        email: {
          equals: email,
          mode: "insensitive",
        },
      },
    });


    // If duplicate user exists, return error
    if (duplicateUser) {
      return NextResponse.json(
        { message: "Email already exists", user: null},
        { status: 409 }
      );
    }
    */

   

    // Hash the password
    const hashedPassword = await hash(passwordHash, 10);

   

   
 
    

    // Create the user
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
    return NextResponse.json({ message: "Fuck Error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }

}