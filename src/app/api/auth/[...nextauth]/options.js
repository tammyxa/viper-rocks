// https://next-auth.js.org/getting-started/introduction
// https://next-auth.js.org/providers/credentials
// https://next-auth.js.org/providers/github
// https://next-auth.js.org/providers/google
// https://next-auth.js.org/providers/facebook

// https://next-auth.js.org/providers/oauth

// Configures different authentication providers
// Currently, we have GitHub, Google, and (working on) Credentials

import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import DiscordProvider from "next-auth/providers/discord";

import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../lib/prisma";
import bcrypt from "bcrypt";
import { handleOAuthLogin } from "../../users/OAuthLogin/route";

export const options = {
  providers: [
    GitHubProvider({
      profile(profile, account) {
        // updates the account object to include the provider and role
        // sending both account and profile to the handleOAuthLogin function is redundant, but it works like this. can be optimized later
        account.provider = "GitHub";
        profile.account = account;

        // sets the user role based on the provider
        let userRole = "Github User";

        // if the user is me, set the role to Admin
        if (profile?.email == "mgibson9@calstatela.edu") {
          // change this to your email to test role functionality
          userRole = "Admin";
        }
        // create or update the user and account in the database
        handleOAuthLogin(profile, account);

        // return the profile with the role
        return {
          ...profile,
          role: userRole,
        };
      },

      // sets the client id and secret from the environment variables
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    GoogleProvider({
      profile(profile, account) {
        // updates the account object to include the provider and role
        // sending both account and profile to the handleOAuthLogin function is redundant, but it works like this. can be optimized later
        account.provider = "Google";
        account.role = "Google User";
        profile.account = account;

        // sets the user role based on the provider
        let userRole = "Google User";

        handleOAuthLogin(profile, account);
        return {
          ...profile,
          id: profile.sub,
          role: userRole,
        };
      },
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    FacebookProvider({
      profile(profile, account) {
        // updates the account object to include the provider and role
        // sending both account and profile to the handleOAuthLogin function is redundant, but it works like this. can be optimized later
        account.provider = "Facebook";
        account.role = "Facebook User";
        profile.account = account;

        // sets the user role based on the provider
        let userRole = "Facebook User";

        // create or update the user and account in the database
        handleOAuthLogin(profile, account);

        // return the profile with the role
        return {
          ...profile,
          role: userRole,
        };
      },
      // sets the client id and secret from the environment variables
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),

    DiscordProvider({
      profile(profile, account) {
        // updates the account object to include the provider and role
        // sending both account and profile to the handleOAuthLogin function is redundant, but it works like this. can be optimized later        
        account.provider = "Discord";
        account.role = "Discord User";
        profile.account = account;

        // sets the user role based on the provider
        let userRole = "Discord User";

        // create or update the user and account in the database
        handleOAuthLogin(profile, account);

        // return the profile with the role
        return {
          ...profile,
          role: userRole,
        };
      },
      // sets the client id and secret from the environment variables
      clientId: process.env.DISCORD_ID,
      clientSecret: process.env.DISCORD_SECRET,
    }),

    CredentialsProvider({
      name: "Credentials",
      // The credentials object is used to define the input fields for the login form
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
          // finds the user in the database
          const foundUser = await prisma.user.findUnique({
            where: { email: credentials.email },
          });

          // if the user is found, compare the password hashes
          if (foundUser) {
            const match = await bcrypt.compare(
              credentials.password,
              foundUser.password
            );

            // if the password matches, return the user object
            if (match) {
              delete foundUser.password; // remove the password from the user object for security

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
    // sets the role property of the token to the user's role
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    // sets the user's role to the role property of the token
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role;
        // upsert the session with the user's role
        
      }
      return session;
    },
  },

  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development" ? true : false,
};
