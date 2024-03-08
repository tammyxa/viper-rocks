-- AlterTable
ALTER TABLE `Account` MODIFY `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `access_token` TEXT NULL,
    MODIFY `token_type` VARCHAR(191) NULL,
    MODIFY `scope` TEXT NULL;

-- AlterTable
ALTER TABLE `User` MODIFY `role` VARCHAR(191) NULL;
