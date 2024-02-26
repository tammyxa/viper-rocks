/*
  Warnings:

  - Added the required column `role` to the `Session` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Session` ADD COLUMN `role` VARCHAR(191) NOT NULL;
