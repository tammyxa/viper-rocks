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

     

      // Get the user ID from the session
      const userId = parseInt(session.user.id, 10);

      // Parse the request body
      const data = await req.json();

      // Destructure the imageId and selectedOption from the request body
      const imageId = parseInt(data.imageId, 10); 
      const selectedOption = parseInt(data.selectedOption, 10); 

      // Log the user ID, image ID, selected option, and request body
      console.log(userId, imageId, selectedOption)
      
      // If the image ID or selected option are missing, return a 400 Bad Request response
      if (!imageId || !selectedOption) {
        // Image ID and selected option are required
        return new NextResponse(JSON.stringify({ message: 'Image ID and selected option are required', userId, imageId, selectedOption }), { status: 400 });
      } 

    


      // If the userMark does not exist, create a new user mark
      // If the userMark already exists, update the existing user marks rock count
      // The user should not scout the same image more than once, however if they do, their new entry will overwrite the old one
      const newUserMark = await prisma.userMark.upsert({
        where: {
      
          userId_imageId_unique: {
            userId: userId,
            imageId: imageId,
          },
        },
        
        update: {
          rockCount: selectedOption,
        },
        create: {
          userId: userId,
          imageId: imageId,
          rockCount: selectedOption,
        },
      });
  
      // Successfully created the new user mark
      return new NextResponse(JSON.stringify({ newUserMark }), { status: 201 });
    } catch (error) {
      console.error('Error creating new user mark:', error.stack);
      return new NextResponse(JSON.stringify({
        message: 'Internal Server Error',
        error: error.message,
        requestBody: req.body 
      }), { status: 500 });
    }
  }
  