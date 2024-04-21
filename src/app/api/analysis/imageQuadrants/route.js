// Import the Prisma client instance
import prisma from "../../../lib/prisma";
import { NextResponse } from "next/server"; // Import NextResponse

// Named export for GET request
export async function POST(req, res) {
  try {
   

      return new NextResponse(
        JSON.stringify({ message: "Images subdivided successfully"  }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  } 
  
  
  
  
  
  catch (error) {
    console.error("Error subdividing images:", error);
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
