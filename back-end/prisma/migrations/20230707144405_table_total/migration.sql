-- CreateTable
CREATE TABLE `TableTotal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `total` DECIMAL(65, 30) NOT NULL,
    `tableId` INTEGER NOT NULL,
    `dailyTotalId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DailyTotal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `total` DECIMAL(65, 30) NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `TableTotal` ADD CONSTRAINT `TableTotal_tableId_fkey` FOREIGN KEY (`tableId`) REFERENCES `Table`(`number`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TableTotal` ADD CONSTRAINT `TableTotal_dailyTotalId_fkey` FOREIGN KEY (`dailyTotalId`) REFERENCES `DailyTotal`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
