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





      const { geometries, quadrant } = await req.json();
      const userId = session.user.id;
      const imageId = quadrant.image.id;
      const results = await saveGeometries(geometries, userId, imageId, quadrant);

      return new NextResponse(JSON.stringify({ message: 'Geometries stored successfully', results }), { status: 200 });
  } catch (error) {
      console.error('Error handling POST request:', error);
      return new NextResponse(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
  }
}

async function saveGeometries(geometries, userId, imageId, quadrant) {
  const { width, height } = quadrant;
  const n = Math.sqrt(quadrant.image.numQuadrants);
  const imageHeight = n * height;
  const quadrantIndex = quadrant.quadrantNumber - 1;
  const qx = quadrantIndex % n;
  const qy = Math.floor(quadrantIndex / n);

  const queries = geometries.map(geometry => {
      let coordinates = geometry.coordinates[0];
      if (coordinates[0] !== coordinates[coordinates.length - 1]) {
          coordinates.push(coordinates[0]);
      }

      const globalCoordinates = coordinates.map(([x, y]) => {
          const gx = Math.round(qx * width + x);
          const gy = imageHeight - (Math.round(qy * height + y));
          return `${gx} ${gy}`;
      }).join(", ");

      const wkt = `POLYGON((${globalCoordinates}))`;
      return prisma.$executeRawUnsafe(
          `INSERT INTO "UserGeometry" ("userId", "drawing", "imageId") VALUES ($1, ST_GeomFromText($2), $3) RETURNING id;`,
          userId,
          wkt,
          imageId
      );
  });

  return prisma.$transaction(queries);
}