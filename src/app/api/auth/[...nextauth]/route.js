// OAuth
import NextAuth from "next-auth";
import {options} from "./options";
// import authOptions from "./authOptions";

// OAuth
const handler = NextAuth(options);

export { handler as GET, handler as POST };