// Import the Prisma client instance
import prisma from '../../../lib/prisma';
import { NextResponse } from 'next/server'; // Import NextResponse

// Named export for GET request
export async function GET(req, res) {
  try {
    const minUserMarks = 3; // This seems to be unused in your provided code snippet

    // Step 1: Fetch images that have not been scouted yet
    const images = await prisma.image.findMany({
      where: { Scouted: false },
      select: { id: true },
    });

    // Step 2 & 3: Iterate over each image to calculate the accepted value
    const acceptedValues = await Promise.all(images.map(async (image) => {
      // Fetch UserMarks for the current image
      const userMarks = await prisma.userMark.findMany({
        where: { imageId: image.id },
        include: { user: true }, // Include user to access reliabilityScore directly
      });

      // Step 4: Calculate the weighted average for rock counts
      let totalWeight = 0;
      let weightedSum = 0;
      userMarks.forEach(mark => {
        const weight = mark.user.reliabilityScore;
        const rockCount = mark.rockCount;
        weightedSum += rockCount * weight;
        totalWeight += weight;
      });

      const weightedAverage = totalWeight > 0 ? weightedSum / totalWeight : 0;

      return { imageId: image.id, acceptedValue: weightedAverage };
    }));

    // Log and return the results
    return new NextResponse(JSON.stringify(acceptedValues), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error calculating accepted values:', error);
    return new NextResponse(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

// Prevent POST requests as this function should only handle GET requests for fetching data
export async function POST(req) {
  return NextResponse.json(
    { error: "Method not allowed" },
    {
      status: 405 // Method Not Allowed status
    }
  );
}