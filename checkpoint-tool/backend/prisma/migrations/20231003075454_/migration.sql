/*
  Warnings:

  - You are about to drop the column `eastLabel` on the `Tool` table. All the data in the column will be lost.
  - You are about to drop the column `northLabel` on the `Tool` table. All the data in the column will be lost.
  - You are about to drop the column `southLabel` on the `Tool` table. All the data in the column will be lost.
  - You are about to drop the column `westLabel` on the `Tool` table. All the data in the column will be lost.
  - You are about to drop the column `xCat` on the `Tool` table. All the data in the column will be lost.
  - You are about to drop the column `yCat` on the `Tool` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Tool" DROP COLUMN "eastLabel",
DROP COLUMN "northLabel",
DROP COLUMN "southLabel",
DROP COLUMN "westLabel",
DROP COLUMN "xCat",
DROP COLUMN "yCat",
ADD COLUMN     "questions" JSONB;
