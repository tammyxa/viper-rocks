// authHandler.js
import prisma from "../../../lib/prisma";

export const handleOAuthLogin = async (profile, account) => {
  try {
    // Extract relevant data from profile and account
    const userData = extractUserDataFromProfile(profile);
    const accountData = extractAccountData(account);

    // Check if the user exists in the database
    // Attempt to find an existing user or create a new one
    const user = await prisma.user.upsert({
      where: { email: userData.email },
      update: {},
      create: {
        email: userData.email,
        password: "OAuth",  
        username: userData.username || profile.name,
      },
    });

    console.log("User:", user);

    // Upsert the account linked to the user
    const accountId = accountData.provider === 'Google' ? String(userData.sub) : String(userData.id);
    await prisma.account.upsert({
      where: {
          id: accountId,
          userId: user.id,
          provider: accountData.provider
      
      },
      update: {
        access_token: accountData.access_token,
        scope: accountData.scope,
        token_type: accountData.token_type,
        updatedAt: new Date(),
      },
      create: {
        id: accountId,
        userId: user.id,
        provider: accountData.provider,
        access_token: accountData.access_token,
        scope: accountData.scope,
        token_type: accountData.token_type,
      },
    });

console.log("USERRR: ", user);

    return user;  // Return the user object, including the user's database ID
    
  } catch (error) {
    console.error("Error handling OAuth login:", error);
    return null;
  }
};

// Helper function to extract relevant user data from the profile
const extractUserDataFromProfile = (profile) => {
  return {
    email: profile.email,
    id: profile.id,
    sub: profile.sub,
    username: profile.username,
    profilePicture: profile.picture,
  };
};

// Helper function to extract relevant account data
const extractAccountData = (account) => {
  return {
    provider: account.provider,
    access_token: account.access_token,
    scope: account.scope,
    token_type: account.token_type,
  };
};
