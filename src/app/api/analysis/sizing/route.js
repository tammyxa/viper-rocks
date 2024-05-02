// Import the Prisma client instance
import prisma from "../../../lib/prisma";
import { NextResponse } from "next/server"; // Import NextResponse

// Export the POST function to handle the request
export async function POST(req) {
  try {
    /*
    // Fetch all images that have not been sized yet
    const images = await prisma.image.findMany({
      where: { sized: false },
      select: { id: true }
    });
    */

    // Iterate over each image and execute the complex SQL logic and update the `sized` attribute
  //  const results = await Promise.all(images.map(async (image) => {
      const query = `
      WITH ValidGeometries AS (
        SELECT
          "imageId",
          "id",
          ST_Simplify(ST_MakeValid("drawing"), 0.0001) AS valid_drawing
        FROM
          "UserGeometry"
      ),
      ClusteredRocks AS (
        SELECT
          "imageId",
          ST_ClusterDBSCAN(valid_drawing, eps := 0.0001, minpoints := 1) OVER(PARTITION BY "imageId") AS cluster_id,
          valid_drawing
        FROM
          ValidGeometries
      ),
      MergedRocks AS (
        SELECT
          "imageId",
          cluster_id,
          ST_Union(valid_drawing) AS merged_drawing
        FROM
          ClusteredRocks
        GROUP BY
          "imageId", cluster_id
      ),
      RockCenter AS (
        SELECT
          "imageId",
          ST_Centroid(merged_drawing) AS rock_center
        FROM
          MergedRocks
      )
      INSERT INTO "RockCenter" ("imageId", "location")
      SELECT
        "imageId",
        rock_center
      FROM
        RockCenter;      
      `;

      // Execute the query for the current image
      await prisma.$executeRawUnsafe(query);

      /*
      // Update the 'sized' status to true for the current image
      await prisma.image.update({
        where: { id: image.id },
        data: { sized: true }
      });
*/
      // return { imageId: image.id, status: "Processed and sized status updated" };
   // }));

    // If successful, respond with a 200 status and a success message including results
    return new NextResponse(JSON.stringify({ message: "Queries executed and sized status updated successfully for all images" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error executing queries and updating images:", error);
    // In case of an error, respond with a 500 status and an error message
    return new NextResponse(
      JSON.stringify({ error: "Internal server error", details: error.message }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
