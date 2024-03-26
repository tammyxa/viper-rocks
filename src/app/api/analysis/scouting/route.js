// Import the Prisma client instance
import prisma from '../../lib/prisma';
import { NextResponse } from 'next/server'; // Import NextResponse

export default async function handler(req) {
  if (req.method !== 'GET') {
    // Create a NextResponse for Method Not Allowed
    return new NextResponse(JSON.stringify({ message: 'Method Not Allowed' }), {
      status: 405,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  try {
    // Fetch unscouted images
    const unscoutedImages = await prisma.image.findMany({
      where: {
        scouted: false,
      },
      select: {
        id: true, // Only select the id to reduce data transfer
      },
    });

    const imagesWithMultipleUserMarks = [];

    for (const image of unscoutedImages) {
      const scoutedCount = await prisma.userMark.groupBy({
        by: ['imageId'],
        where: {
          imageId: image.id,
        },
        _count: {
          userId: true,
        },
        having: {
          userId: {
            _count: {
              gt: 1,
            },
          },
        },
      });

      if (scoutedCount.length > 0) {
        imagesWithMultipleUserMarks.push(image.id);
      }
    }

    // Create a NextResponse for successful retrieval
    return new NextResponse(JSON.stringify(imagesWithMultipleUserMarks), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Failed to retrieve data:', error);
    // Create a NextResponse for Internal Server Error
    return new NextResponse(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
