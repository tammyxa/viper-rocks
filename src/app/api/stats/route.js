import { NextResponse } from "next/server"; // NextResponse for sending responses as json objects
import { PrismaClient } from '@prisma/client';

// Should be a POST request, GET not allowed
export async function GET(req) {


    const prisma = new PrismaClient();
    

    const userMarkData = await getUserMark(prisma)
      .catch((e) => {
        console.log(e);
        throw e;
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
      return NextResponse.json(userMarkData);
    }

async function getUserMark(prisma) {
    
    const allData = await prisma.userMark.findMany({
      where: {},
    });
    console.log('allData', allData);
    return(allData);
  }
