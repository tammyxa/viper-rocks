
// OAuth
import NextAuth from "next-auth";
import {options} from "./options";
// Email and Password

import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

// OAuth
const handler = NextAuth(options);


// Email and Password
const prisma = new PrismaClient();

// Email and Password, configures the adapter to use Prisma (ORM)
export const authOptions = {
    adapter: PrismaAdapter(prisma),
};

//
export { handler as GET, handler as POST };