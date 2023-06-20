/*
  Warnings:

  - The primary key for the `menuitem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `menuitem` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `_menuitemtoorder` DROP FOREIGN KEY `_MenuItemToOrder_A_fkey`;

-- DropIndex
DROP INDEX `MenuItem_id_key` ON `menuitem`;

-- AlterTable
ALTER TABLE `menuitem` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD PRIMARY KEY (`name`);

-- AddForeignKey
ALTER TABLE `_MenuItemToOrder` ADD CONSTRAINT `_MenuItemToOrder_A_fkey` FOREIGN KEY (`A`) REFERENCES `MenuItem`(`name`) ON DELETE CASCADE ON UPDATE CASCADE;
