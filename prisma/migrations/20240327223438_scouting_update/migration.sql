/*
  Warnings:

  - You are about to drop the column `Scouted` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `rockCount` on the `RockQuadrant` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Image" DROP COLUMN "Scouted",
ADD COLUMN     "rockCount" INTEGER,
ADD COLUMN     "scouted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "RockQuadrant" DROP COLUMN "rockCount";
