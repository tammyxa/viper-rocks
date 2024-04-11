// Import necessary modules and dependencies
import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { options } from "./options"; // Import authentication options

// Create a new instance of PrismaClient for database operations
const prisma = new PrismaClient();

// Configure the adapter to use Prisma for email/password authentication
const adapter = PrismaAdapter(prisma);

// Initialize NextAuth with the provided options and adapter
const authHandler = NextAuth({
  ...options,
  adapter,
});

// Define the API route handler function
export default async (req, res) => {
  await authHandler(req, res); // Forward the request to NextAuth's request handler
};
