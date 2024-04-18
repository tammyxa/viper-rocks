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

      console.log(session.user)

      // Get the user ID from the session
      const userId = session.user.id




      const data = await req.json();

      const { geometries, quadrant } = data;

      console.log(geometries, quadrant, userId);


   
     // Process each geometry
     const results = [];
     for (const geometry of geometries) {
        if (geometry.type === 'Polygon' && geometry.coordinates.length > 0) {
            // Convert each ring to a string and join all rings separated by commas
            const wktRings = geometry.coordinates.map(ring => 
                `(${ring.map(point => `${point[0]} ${point[1]}`).join(', ')})`
            ).join(', ');

                console.log("wktRings", wktRings);

            const wkt = `POLYGON(${wktRings})`;

            console.log("wkt", wkt);
            
            const insertResult = await prisma.$executeRawUnsafe(
                `INSERT INTO "UserGeometry" ("userId","geom") VALUES ($1, ST_GeomFromText($2)) RETURNING id;`,
                userId, // First placeholder $1 to safely pass value
                wkt     // Second placeholder $2
            );

            console.log("insertResult", insertResult);
            results.push(insertResult);
        }
    }

      //console.log("complete!");
/*
    await prisma.$transaction(async (prisma) => {
      for (const geometry of geometries) {
        await prisma.$executeRaw`INSERT INTO your_table_name (geom) VALUES (ST_GeomFromGeoJSON(${JSON.stringify(geometry)}))`;
      }
    });
    res.status(200).json({ message: 'Geometries saved successfully' });
      */
  
      // Successfully created the new user mark
      return new NextResponse(JSON.stringify({ message: 'Geometries saves successfully', results }), { status: 200 });
    } catch (error) {
      console.error('Error creating new geometry in database:');
      return new NextResponse(JSON.stringify({
        message: 'Internal Server Error',
        error: error.message,
        requestBody: req.body 
      }), { status: 500 });
    }
  }
  