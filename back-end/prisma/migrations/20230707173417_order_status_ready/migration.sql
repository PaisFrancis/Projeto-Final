-- AlterTable
ALTER TABLE `order` MODIFY `status` ENUM('PENDING', 'READY', 'COMPLETED', 'CANCELED') NOT NULL;