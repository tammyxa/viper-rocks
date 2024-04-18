import { getServerSession } from 'next-auth';
import prisma from '../../../lib/prisma';
import { NextResponse } from 'next/server';
import { options } from '../../auth/[...nextauth]/options'


export async function GET(req) {
  

    try {
   
        const rockQuadrants = await prisma.RockQuadrant.findMany({
         
            include: {
              image: true,
            },
          });
  
          


     
      return new NextResponse(JSON.stringify( rockQuadrants ), { status: 201 });
    } catch (error) {
      console.error('Error fetching quadrants');
      return new NextResponse(JSON.stringify({
        message: 'Internal Server Error',
        error: error.message,
        requestBody: req.body 
      }), { status: 500 });
    }
  }
  