/*
  Warnings:

  - Added the required column `quadrantNumber` to the `RockQuadrant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RockQuadrant" ADD COLUMN     "quadrantNumber" INTEGER NOT NULL;
