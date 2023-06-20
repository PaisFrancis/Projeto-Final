/*
  Warnings:

  - The primary key for the `menuitem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id]` on the table `MenuItem` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tableId]` on the table `Reservation` will be added. If there are existing duplicate values, this will fail.
  - The required column `id` was added to the `MenuItem` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE `menuitem` DROP PRIMARY KEY,
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `table` ADD COLUMN `total` DOUBLE NOT NULL DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX `MenuItem_id_key` ON `MenuItem`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `Reservation_tableId_key` ON `Reservation`(`tableId`);
