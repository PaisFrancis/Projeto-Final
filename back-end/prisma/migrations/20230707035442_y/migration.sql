/*
  Warnings:

  - You are about to drop the column `clearedAt` on the `tabletotal` table. All the data in the column will be lost.
  - Added the required column `createdAt` to the `TableTotal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `TableTotal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tabletotal` DROP COLUMN `clearedAt`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;
