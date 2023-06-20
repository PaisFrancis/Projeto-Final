/*
  Warnings:

  - You are about to drop the column `observations` on the `menuitem` table. All the data in the column will be lost.
  - Added the required column `description` to the `MenuItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `menuitem` DROP COLUMN `observations`,
    ADD COLUMN `description` VARCHAR(191) NOT NULL;
