/*

  try {
    const geometries = await req.json();
    await prisma.$transaction(async (prisma) => {
      for (const geometry of geometries) {
        await prisma.$executeRaw`INSERT INTO your_table_name (geom) VALUES (ST_GeomFromGeoJSON(${JSON.stringify(geometry)}))`;
      }
    });
    res.status(200).json({ message: 'Geometries saved successfully' });
  } catch (error) {
    console.error('Failed to save geometries:', error);
    res.status(500).json({ message: 'Server error while saving geometries' });
  }
}

*/


import { getServerSession } from 'next-auth';
import prisma from '../../../lib/prisma';
import { NextResponse } from 'next/server';
import { options } from '../../auth/[...nextauth]/options'




export async function POST(req) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
}

    try {
      //console.log(req.headers); // Ensure it's application/json
  //const rawBody = await req.text(); // Temporarily log raw body
  //console.log(rawBody);



      // Get the user session
      const session = await getServerSession(options);

      // If the user is not authenticated, return a 403 Forbidden response
      if (!session || !session.user) {
        // Not Authenticated
        return new NextResponse(JSON.stringify({ message: 'Not Authenticated' }), { status: 403 });
      }





      const data = await req.json();
    const { geometries, quadrant } = data;
    const userId = session.user.id;
    const imageId = quadrant.image.id; // Assuming each image/quadrant has an ID

     // Use static dimensions for all images
     const imageWidth = 1500;
     const imageHeight = 1000;
 

 // Debugging: log variables to check for undefined
 console.log(`userId: ${userId}, imageId: ${imageId}, imageWidth: ${imageWidth}, imageHeight: ${imageHeight}`);


    const quadrantWidth = quadrant.width;
    const quadrantHeight = quadrant.height;
    const n = Math.sqrt(quadrant.image.numQuadrants); // Assuming the number of quadrants is a perfect square
    const quadrantIndex = quadrant.quadrantNumber - 1;
    const qx = quadrantIndex % n; // Column index of the quadrant
    const qy = Math.floor(quadrantIndex / n); // Row index of the quadrant

    await prisma.$transaction(
      geometries.map(geometry => {
        const globalCoordinates = geometry.coordinates[0].map(p => {
          const gx = Math.round(quadrant.x + p.x);
          const gy = Math.round(quadrant.y + p.y);
          return `${gx} ${gy}`;
        }).join(", ");

        const wkt = `POLYGON((${globalCoordinates}))`;
        const rasterQuery = `
          WITH geom AS (
            SELECT ST_GeomFromText('${wkt}', 4326) AS geom
          ),
          raster AS (
            SELECT ST_AsRaster(geom.geom, ${imageWidth}, ${imageHeight}, '8BUI', 255) AS rast
            FROM geom
          )
          INSERT INTO "UserGeometry" ("userId", "imageId", "drawing")
          SELECT ${userId}, ${imageId}, raster.rast FROM raster
          RETURNING id;
        `;

        return prisma.$executeRawUnsafe(rasterQuery);
      })
    );

    return new NextResponse(JSON.stringify({ message: 'Geometries saved successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error handling POST request:', error);
    return new NextResponse(JSON.stringify({
      message: 'Internal Server Error',
      error: error.message
    }), { status: 500 });
  }
}