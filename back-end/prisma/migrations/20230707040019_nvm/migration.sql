/*
  Warnings:

  - You are about to drop the `dailytotal` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tabletotal` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `tabletotal` DROP FOREIGN KEY `TableTotal_dailyTotalId_fkey`;

-- DropTable
DROP TABLE `dailytotal`;

-- DropTable
DROP TABLE `tabletotal`;
