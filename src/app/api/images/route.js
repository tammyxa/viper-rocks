import  prisma  from '../../lib/prisma';
import { NextResponse } from 'next/server';



// Handle GET request
export async function GET(req) {
  try {
    // Fetch all images from the "Image" table in the database
    const images = await prisma.image.findMany();

    // If images are found, return them
    return NextResponse.json(images, {
      status: 200 // OK status
    });
  } catch (error) {
    return NextResponse.json({ message: "Error fetching images", error }, { status: 500 });
  } finally {
    // Disconnect from the Prisma client
    await prisma.$disconnect();
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
