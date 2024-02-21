/*
  Warnings:

  - You are about to drop the column `refresh_token` on the `Account` table. All the data in the column will be lost.
  - Added the required column `scope` to the `Account` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Account` DROP COLUMN `refresh_token`,
    ADD COLUMN `scope` TEXT NOT NULL;
