import prisma from "../../../../lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {

  try {
    // Execute the query to fetch rock data and their corresponding image data
    const userGeometry = await prisma.$queryRaw`
    SELECT
      "UserGeometry".id,
      "UserGeometry"."userId",
      "UserGeometry"."imageId",
      ST_AsText("UserGeometry".drawing) AS drawing,
      "Image"."imageURL"
    FROM 
      "UserGeometry"
    JOIN 
      "Image" ON "UserGeometry"."imageId" = "Image".id
`;


    // Log the first rock entry to check data
    // console.log(userGeometry[0]);

    // Return the fetched data with a 200 OK status
    return new NextResponse(JSON.stringify(userGeometry), { status: 200 });
  } catch (error) {
    console.error("Error fetching User Geometry", error);
    // Return a 500 Internal Server Error with error details
    return new NextResponse(
      JSON.stringify({
        message: "Internal Server Error",
        error: error.message,
        requestBody: req.body
      }),
      { status: 500 }
    );
  }
}
