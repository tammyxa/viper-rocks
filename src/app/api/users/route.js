import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const userData = body.formData;
    // Confirm data exists
    if (!userData.email || !userData.password_hash) {
      return NextResponse.json(
        { message: "Email and Password are required" },
        { status: 400 }
      );
    }
 
    // Check for duplicate emails case-insensitively using Prisma
    const duplicateUser = await prisma.user.findFirst({
      where: {
        email: {
          equals: userData.email,
          mode: "insensitive",
        },
      },
    });
    if (duplicateUser) {
      return NextResponse.json(
        { message: "Email already exists" },
        { status: 450 }
      );
    }
    const hashedPassword = await bcrypt.hash(userData.password_hash, 10);
    userData.password_hash = hashedPassword;

    const newUser = await prisma.user.create({
      data: userData,
    });

    return NextResponse.json(
      { message: "User Created.", user: newUser },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
