-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT,
    "emailVerified" TIMESTAMP(3),
    "profilePicture" TEXT,
    "firstName" TEXT,
    "lastName" TEXT,
    "over13" BOOLEAN,
    "parentEmail" TEXT,
    "pFirstName" TEXT,
    "pLastName" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "provider" TEXT NOT NULL,
    "access_token" TEXT,
    "scope" TEXT,
    "token_type" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "cameraId" INTEGER NOT NULL,
    "imageURL" TEXT NOT NULL,
    "Scouted" BOOLEAN NOT NULL DEFAULT false,
    "captureDate" TIMESTAMP(3) NOT NULL,
    "captureTime" TIMESTAMP(3) NOT NULL,
    "roverLocation" TEXT NOT NULL,
    "resolution" TEXT NOT NULL,
    "pixelDensity" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RockQuadrant" (
    "id" SERIAL NOT NULL,
    "imageId" INTEGER NOT NULL,
    "x" INTEGER NOT NULL,
    "y" INTEGER NOT NULL,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "rockCount" INTEGER,

    CONSTRAINT "RockQuadrant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserMark" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "imageId" INTEGER NOT NULL,
    "quadrantId" INTEGER,
    "rockCount" INTEGER,

    CONSTRAINT "UserMark_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserMark_userId_imageId_key" ON "UserMark"("userId", "imageId");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RockQuadrant" ADD CONSTRAINT "RockQuadrant_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
