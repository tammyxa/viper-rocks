/*
  Warnings:

  - You are about to drop the `UserGeometryPoint` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `geometry` to the `UserGeometry` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserGeometryPoint" DROP CONSTRAINT "UserGeometryPoint_userGeometryId_fkey";

-- AlterTable
ALTER TABLE "UserGeometry" ADD COLUMN     "geometry" TEXT NOT NULL;

-- DropTable
DROP TABLE "UserGeometryPoint";
