// Import the Prisma client instance
import prisma from "../../../lib/prisma";
import { NextResponse } from "next/server"; // Import NextResponse

// Named export for GET request
export async function POST(req, res) {
  try {
    const { acceptedRockCounts } = await req.json();
    console.log("acceptedRockCounts:", acceptedRockCounts);
    const allUserMarks = await Promise.all(
      acceptedRockCounts.map(async (acceptedRockCount) => {

        const userMarks = await prisma.userMark.findMany({
            where: { imageId: acceptedRockCount.imageId },
            include: { user: true },
          });
          console.log("userMarks:", userMarks);

          const updateUserMarks = await Promise.all( userMarks.map(async (userMark) => {

            const difference = Math.abs(userMark.rockCount - acceptedRockCount.acceptedValue); // Calculate difference from accepted value
            
            let newReliabilityScore = userMark.user.reliabilityScore;
            if (difference <= 100 && newReliabilityScore < 100) {
              newReliabilityScore += 1; // Increment score by 1
            } else if (difference > 100 && newReliabilityScore > 0) {
              newReliabilityScore -= 1; // Decrement score by 1
            }
            console.log("newReliabilityScore:", newReliabilityScore);

            // Update user's reliabilityScore
            await prisma.User.update({
              where: { id: userMark.userId },
              data: {
                reliabilityScore: newReliabilityScore,
              },
            });
            return {userid: userMark.userId, reliabilityScore: newReliabilityScore};
          }))

          
  
      
      }));
      return new NextResponse(
        JSON.stringify({ message: "User reliability updated successfully"  }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  } 
  
  
  
  
  
  catch (error) {
    console.error("Error updating user reliability:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
// Prevent POST requests as this function should only handle GET requests for fetching data
export async function GET(req) {
  try {
  } catch (error) {}
}
