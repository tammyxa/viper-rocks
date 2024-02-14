// https://next-auth.js.org/getting-started/introduction
// https://next-auth.js.org/providers/credentials
// https://next-auth.js.org/providers/github
// Configures different authentication providers
// Currently, we have GitHub, Google, and (working on) Credentials

import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../lib/prisma";
import bcrypt from "bcrypt";



export const options = {
  providers: [
    GitHubProvider({
      profile(profile) {
        console.log("GitHub Profie: ", profile);

        let userRole = "Github User";
        if (profile?.email == "mgibson9@calstatela.edu") {
          // change this to your email to test role functionality
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
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "enter email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "enter password",
        },
      },
      authorize: async (credentials) => {
        try {
          const foundUser = await prisma.user.findUnique({
            where: { email: credentials.email }
          });

          if (foundUser) {
            console.log("user exists");
            const match = await bcrypt.compare(credentials.password, foundUser.password);
            
              if (match) {
                console.log("password match");
                delete foundUser.password;

                foundUser["role"] = "Unverified Email";
                return foundUser;
              }
            
          }
        } catch (error) {
          console.error("Credentials Error: ", error);
          return null;
        }
      },
    }),
  ],

  // ensures that the token.role property is synchronized with the user.role property and vice versa, allowing for consistent role-based access control throughout the application.
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
  debug: process.env.NODE_ENV === "development" ? true : false,
};
