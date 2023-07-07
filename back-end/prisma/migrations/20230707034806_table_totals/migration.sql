-- CreateTable
CREATE TABLE `TableTotal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `total` DOUBLE NOT NULL,
    `clearedAt` DATETIME(3) NOT NULL,
    `dailyTotalId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DailyTotal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `total` DOUBLE NOT NULL,
    `date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `TableTotal` ADD CONSTRAINT `TableTotal_dailyTotalId_fkey` FOREIGN KEY (`dailyTotalId`) REFERENCES `DailyTotal`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
