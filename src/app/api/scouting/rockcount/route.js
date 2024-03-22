import { getServerSession } from 'next-auth';
import prisma from '../../../lib/prisma';
import { NextResponse } from 'next/server';
import { options } from '../../auth/[...nextauth]/options'


export async function POST(req) {
  

    try {
      //console.log(req.headers); // Ensure it's application/json
  //const rawBody = await req.text(); // Temporarily log raw body
  //console.log(rawBody);




      const session = await getServerSession(options);
      if (!session || !session.user) {
        // Not Authenticated
        return new NextResponse(JSON.stringify({ message: 'Not Authenticated' }), { status: 403 });
      }
      const userId = parseInt(session.user.id, 10);
     const data = await req.json();
      const { imageId, selectedOption } = data

      console.log(userId, imageId, selectedOption, data)
      
      if (!imageId || !selectedOption) {
        // Image ID and selected option are required
        return new NextResponse(JSON.stringify({ message: 'Image ID and selected option are required', userId, imageId, selectedOption }), { status: 400 });
      } 
  
      const newUserMark = await prisma.UserMark.create({
        data: {
          userId: userId,
          imageId: imageId,
          rockCount: selectedOption,
        },
      });
  
      // Successfully created the new user mark
      return new NextResponse(JSON.stringify({ newUserMark }), { status: 201 });
    } catch (error) {
      console.error('Error creating new user mark:');
      return new NextResponse(JSON.stringify({
        message: 'Internal Server Error',
        error: error.message,
        requestBody: req.body // Include the original request body for debugging
      }), { status: 500 });
    }
  }
  