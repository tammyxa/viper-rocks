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


/*
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

*/


      const geometries = await req.json();

      const { points } = geometries;

      console.log(geometries, "points");
/*
    await prisma.$transaction(async (prisma) => {
      for (const geometry of geometries) {
        await prisma.$executeRaw`INSERT INTO your_table_name (geom) VALUES (ST_GeomFromGeoJSON(${JSON.stringify(geometry)}))`;
      }
    });
    res.status(200).json({ message: 'Geometries saved successfully' });
      */
  
      // Successfully created the new user mark
      return new NextResponse(JSON.stringify({ message: 'Geometries saves successfully', geometries }), { status: 200 });
    } catch (error) {
      console.error('Error creating new user mark:');
      return new NextResponse(JSON.stringify({
        message: 'Internal Server Error',
        error: error.message,
        requestBody: req.body 
      }), { status: 500 });
    }
  }
  