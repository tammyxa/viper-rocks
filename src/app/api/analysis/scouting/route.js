// Import the Prisma client instance
import prisma from "../../../lib/prisma";
import { NextResponse } from "next/server"; // Import NextResponse

// Named export for GET request
export async function GET(req, res) {
  try {
    const minUserMarks = 2;

    // Step 1: Fetch images that have not been scouted yet
    const images = await prisma.Image.findMany({
      where: { scouted: false },
      select: { id: true },
    });

    // Step 2 & 3: Iterate over each image to calculate the accepted value
    const scoutedImages = await Promise.all(
      images.map(async (image) => {
        const userMarks = await prisma.UserMark.findMany({
          where: { imageId: image.id },
          include: { user: true },
        });

        if (userMarks.length >= minUserMarks) {
          let totalWeight = 0;
          let weightedSum = 0;
          userMarks.forEach((mark) => {
            const reliability = mark.user.reliabilityScore;
            const rockCount = mark.rockCount;
            weightedSum += rockCount * reliability;
            totalWeight += reliability;
          });

          const weightedAverage = totalWeight > 0 ? Math.round(weightedSum / totalWeight) : 0;  // Calculate weighted average and round it

          return { imageId: image.id, acceptedValue: weightedAverage };  // Return weighted average
        } else {
          return null;
        }
      })
    );

    const acceptedValues = scoutedImages.filter((value) => value !== null);

    return new NextResponse(JSON.stringify(acceptedValues), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error calculating accepted values:", error);
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
export async function POST(req) {
  const { acceptedValues } = await req.json(); // Expecting { acceptedValues: [{ imageId: 1, acceptedValue: 10 }, ...] }
  console.log("Accepted Salads:", acceptedValues);

  try {
    let updateResponses = [];
    // Update the Images rockcount's with the accepted values
   

    await Promise.all(
      acceptedValues.map(async ({ imageId, acceptedValue }) => {
         // Determine the number of quadrants and the width and height of each quadrant based on the accepted value
         let numQuadrants, w, h;
        
         if (acceptedValue <= 100) {
           w = 500; // width of each quadrant
           h = 333; // height of each quadrant
           numQuadrants = 9;
         } else if (acceptedValue < 200) {
           w = 375;
           h = 250;
           numQuadrants = 16;
         } else if (acceptedValue < 300) {
           w = 300;
           h = 200;
           numQuadrants = 25;
         } else {
           w = 250;
           h = 166;
           numQuadrants = 36;
         }

         console.log("Image ID:", imageId, "Accepted Value:", acceptedValue, "Num Quadrants:", numQuadrants, "Width:", w, "Height:", h);
        // Update the Image with the accepted value and set it as scouted
        const updatedImage = await prisma.Image.update({
          where: { id: imageId },
          data: {
            rockCount: acceptedValue,
            scouted: true,
            numQuadrants: numQuadrants,
          },
        });

       
        // Calculate the number of quadrants in each row and column
        const quadrantSize = Math.sqrt(numQuadrants); 
        let quadNumber = 1;
        let quadrants = [];

        // Create RockQuadrant entries for each quadrant
        for (let i = 0; i < quadrantSize; i++) {
          for (let j = 0; j < quadrantSize; j++) {

            const quadrant = await prisma.RockQuadrant.create({
              data: {
                imageId: imageId,
                quadrantNumber: quadNumber++,
                x: j * w, 
                y: i * h, 
                width: w,
                height: h,
              },
            });
            quadrants.push(quadrant);
          }
        }
        updateResponses.push({ updatedImage, quadrants });
      })
    );

    // If successful, respond with a 200 status and a success message
    return new NextResponse(JSON.stringify({ message: "Images and quadrants updated successfully", acceptedValues, updateResponses }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });

  } catch (error) {
    console.error("Error updating images:", error);
    // In case of an error, respond with a 500 status and an error message
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