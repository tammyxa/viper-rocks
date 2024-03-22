import { getServerSession } from 'next-auth';
import prisma from '../../../lib/prisma';
import { NextResponse } from 'next/server';
import { options } from '../../auth/[...nextauth]/options'


export async function POST(req) {
  if (req.method === 'POST') {
    const { imageId, selectedOption } = req.body;
    const session = await getServerSession(options);

    console.log('Request body:', imageId, selectedOption, session);
  }

    try {
      const session = await getServerSession();
      if (!session || !session.user) {
        // Not Authenticated
        return new NextResponse(JSON.stringify({ message: 'Not Authenticated' }), { status: 403 });
      }
      const userId = parseInt(session.user.id, 10);
  
      const { imageId, selectedOption } = req.body;
/*
      if (!imageId || !selectedOption) {
        // Image ID and selected option are required
        return new NextResponse(JSON.stringify({ message: 'Image ID and selected option are required', userId, imageId, selectedOption }), { status: 400 });
      } */
  
      const newUserMark = await prisma.UserMark.create({
        data: {
          userId: userId,
          imageId: parseInt(imageId, 10),
          rockCount: parseInt(selectedOption, 10),
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
  