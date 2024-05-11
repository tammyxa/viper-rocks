import { getServerSession } from "next-auth";
import prisma from "../../../lib/prisma";
import { NextResponse } from "next/server";
import { options } from "../../auth/[...nextauth]/options";

export async function GET(req) {
  try {
    // Ensuring that the user is authenticated before fetching data
    const session = await getServerSession(options);
    if (!session) {
      return new NextResponse(JSON.stringify({ message: "Unauthorized" }), { status: 401 });
    }

    // Execute the query to fetch rock data and their corresponding image data
    const rocks = await prisma.$queryRaw`
    SELECT 
    "RockCenter".id,
    ST_AsText("RockCenter".location) AS location,
    ST_AsText("RockCenter".shape) AS shape,
    ST_AsText(ST_LongestLine("RockCenter".location, "RockCenter".shape)) AS longest_line,
    ST_Length(ST_LongestLine("RockCenter".location, "RockCenter".shape)) AS distance,
    "Image".id AS imageId,
    "Image"."imageURL"
FROM 
    "RockCenter"
JOIN 
    "Image" ON "RockCenter"."imageId" = "Image".id
`;


    // Log the first rock entry to check data
    console.log(rocks[0]);

    // Return the fetched data with a 200 OK status
    return new NextResponse(JSON.stringify(rocks), { status: 200 });
  } catch (error) {
    console.error("Error fetching rocks", error);
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
