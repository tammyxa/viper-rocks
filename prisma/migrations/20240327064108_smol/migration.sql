-- DropForeignKey
ALTER TABLE "UserMark" DROP CONSTRAINT "UserMark_userId_fkey";

-- AddForeignKey
ALTER TABLE "UserMark" ADD CONSTRAINT "UserMark_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
