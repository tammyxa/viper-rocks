// Import the Prisma client instance
import prisma from '../../../lib/prisma';
import { NextResponse } from 'next/server'; // Import NextResponse

// Named export for GET request
export async function GET(req, res) {
  try {
    const minUserMarks = 3; 

    // Step 1: Fetch images that have not been scouted yet
    const images = await prisma.Image.findMany({
      where: { scouted: false },
      select: { id: true },
    });

    // Step 2 & 3: Iterate over each image to calculate the accepted value
    const scoutedImages = await Promise.all(images.map(async (image) => {
      // Fetch UserMarks for the current image
      const userMarks = await prisma.UserMark.findMany({
        where: { imageId: image.id },
        include: { user: true }, // Include user to access reliabilityScore directly
      });

      // Step 4: Calculate the weighted average for rock counts
      if (userMarks.length >= minUserMarks) {
      let totalWeight = 0;
      let weightedSum = 0;
      userMarks.forEach(mark => {
        const reliability = mark.user.reliabilityScore;
        const rockCount = mark.rockCount;
        weightedSum += rockCount * reliability;
        totalWeight += reliability;
      });

      const weightedAverage = totalWeight > 0 ? weightedSum / totalWeight : 0;

      return { imageId: image.id, acceptedValue: weightedAverage };
    }
    else {
      return null;
    }
    }));

     // Filter out any null values from images that didn't meet the UserMarks criteria
     const acceptedValues = scoutedImages.filter(value => value !== null);

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
  const { acceptedValues } = await req.json(); // Expecting { acceptedValues: [{ imageId: 1, acceptedValue: 10 }, ...] }
  console.log('Accepted Salads:', acceptedValues)

  try {
    await Promise.all(acceptedValues.map(async ({ imageId, acceptedValue }) => {
      // Assuming you're updating a field for the accepted rock count in the Image table or related logic
      await prisma.Image.update({
        where: { id: imageId },
        data: {
          rockCount: acceptedValue,
          scouted: true,
        },
      });
    }));

    // If successful, respond with a 200 status and a success message
    return new NextResponse(JSON.stringify({ message: 'Images updated successfully' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error updating images:', error);
    // In case of an error, respond with a 500 status and an error message
    return new NextResponse(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}


