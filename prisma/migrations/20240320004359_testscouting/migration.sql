/*
  Warnings:

  - You are about to drop the column `resoulution` on the `Image` table. All the data in the column will be lost.
  - Added the required column `resolution` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Image` DROP COLUMN `resoulution`,
    ADD COLUMN `resolution` VARCHAR(191) NOT NULL;
