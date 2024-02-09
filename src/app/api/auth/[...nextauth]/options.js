// https://next-auth.js.org/getting-started/introduction
// https://next-auth.js.org/providers/credentials
// https://next-auth.js.org/providers/github
// Configures different authentication providers
// Currently, we have GitHub, Google, and (working on) Credentials


import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const options = {
  providers: [
    GitHubProvider({
      profile(profile) {
        console.log("GitHub Profie: ", profile);

        let userRole = "Github User";
        if (profile?.email == "mgibson9@calstatela.edu") {
          userRole = "Admin";
        }

        return {
          ...profile,
          role: userRole,
        };
      },

      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      profile(profile) {
        console.log("Google Profie: ", profile);

        let userRole = "Google User";
        return {
          ...profile,
          id: profile.sub,
          role: userRole,
        };
      },
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        // Check if the "Create Account" button was clicked
        if (req.method === "POST" && req.body.action === "create-account") {
          // Perform logic for creating a new account in the database
          const hashedPassword = await bcrypt.hash(password, 10);

          const newUser = await prisma.users.create({
            data: {
              email,
              password_hash: hashedPassword,
              // Other user properties...
            },
          });

          // Return the newly created user object
          return newUser;
        }
        // Fetch user record from the database based on the email
        const user = await prisma.user.findOne({ email });

        if (user) {
          // Compare the provided password with the stored password hash
          const passwordMatch = await bcrypt.compare(password, user.password);

          if (passwordMatch) {
            // Return the user object if the password matches
            return user;
          }
        }

        // Return null if the email or password is incorrect
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },

  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};
