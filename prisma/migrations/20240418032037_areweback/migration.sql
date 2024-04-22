/*
  Warnings:

  - You are about to drop the column `geometry` on the `UserGeometry` table. All the data in the column will be lost.
  - Added the required column `userId` to the `UserGeometry` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserGeometry" DROP COLUMN "geometry",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "UserGeometry" ADD CONSTRAINT "UserGeometry_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
