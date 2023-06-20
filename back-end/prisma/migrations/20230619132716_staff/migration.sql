/*
  Warnings:

  - The values [KitchenStaff,WaiterStaff] on the enum `User_role` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `role` ENUM('ADMIN', 'USER', 'STAFF') NOT NULL DEFAULT 'USER';
