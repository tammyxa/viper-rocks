
// Import necessary modules and dependencies
import NextAuth from "next-auth"; //Oauth
import { PrismaAdapter } from "@next-auth/prisma-adapter"; //Email and Password
import { PrismaClient } from "@prisma/client"; //Email and Passowrd
import { options } from "./options"; // Import authentication options OAuth

// Create a new instance of PrismaClient for database operations
const prisma = new PrismaClient();

// Configure the adapter to use Prisma for email/password authentication
const authOptions = {
  adapter: PrismaAdapter(prisma),
};

// OAuth authentication handler using options defined in options.js
const handler = NextAuth(options);

// Export the OAuth authentication handler
export default handler;
