/*
  Warnings:

  - Made the column `updatedAt` on table `table` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `table` MODIFY `updatedAt` DATETIME(3) NOT NULL;
