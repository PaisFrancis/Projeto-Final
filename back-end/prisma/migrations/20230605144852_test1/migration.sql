-- AlterTable
ALTER TABLE `user` ADD COLUMN `role` ENUM('ADMIN', 'USER', 'KitchenStaff', 'WaiterStaff') NOT NULL DEFAULT 'USER';
