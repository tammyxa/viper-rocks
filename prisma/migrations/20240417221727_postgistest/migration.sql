/*
  Warnings:

  - You are about to drop the column `geometry` on the `UserGeometry` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserGeometry" DROP COLUMN "geometry";

-- CreateTable
CREATE TABLE "UserGeometryPoint" (
    "id" SERIAL NOT NULL,
    "userGeometryId" INTEGER NOT NULL,
    "x" DOUBLE PRECISION NOT NULL,
    "y" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "UserGeometryPoint_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserGeometryPoint" ADD CONSTRAINT "UserGeometryPoint_userGeometryId_fkey" FOREIGN KEY ("userGeometryId") REFERENCES "UserGeometry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
