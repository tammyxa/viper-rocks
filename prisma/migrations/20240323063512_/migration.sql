/*
  Warnings:

  - A unique constraint covering the columns `[userId,imageId]` on the table `UserMark` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `UserMark_userId_imageId_key` ON `UserMark`(`userId`, `imageId`);
