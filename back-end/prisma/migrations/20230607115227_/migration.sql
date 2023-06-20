/*
  Warnings:

  - You are about to alter the column `tableId` on the `order` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `tableId` on the `reservation` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `table` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `table` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[number]` on the table `Table` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_tableId_fkey`;

-- DropForeignKey
ALTER TABLE `reservation` DROP FOREIGN KEY `Reservation_tableId_fkey`;

-- DropIndex
DROP INDEX `Table_id_key` ON `table`;

-- AlterTable
ALTER TABLE `order` MODIFY `tableId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `reservation` MODIFY `tableId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `table` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    MODIFY `number` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`number`);

-- CreateIndex
CREATE UNIQUE INDEX `Table_number_key` ON `Table`(`number`);

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_tableId_fkey` FOREIGN KEY (`tableId`) REFERENCES `Table`(`number`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reservation` ADD CONSTRAINT `Reservation_tableId_fkey` FOREIGN KEY (`tableId`) REFERENCES `Table`(`number`) ON DELETE RESTRICT ON UPDATE CASCADE;
