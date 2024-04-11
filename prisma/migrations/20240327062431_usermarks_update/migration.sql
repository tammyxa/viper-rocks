-- AlterTable
ALTER TABLE "User" ADD COLUMN     "reliabilityScore" INTEGER NOT NULL DEFAULT 50;

-- AddForeignKey
ALTER TABLE "UserMark" ADD CONSTRAINT "UserMark_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
