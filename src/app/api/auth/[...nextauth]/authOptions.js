// Email and Password

import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

// Email and Password
const prisma = new PrismaClient();
// Email and Password, configures the adapter to use Prisma (ORM)
export const authOptions = {
    adapter: PrismaAdapter(prisma),
};