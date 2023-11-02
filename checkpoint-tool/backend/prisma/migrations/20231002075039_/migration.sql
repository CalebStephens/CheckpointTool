/*
  Warnings:

  - Made the column `toolId` on table `Paper` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Paper" ALTER COLUMN "toolId" SET NOT NULL;
