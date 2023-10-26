/*
  Warnings:

  - A unique constraint covering the columns `[paperCode]` on the table `Paper` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Paper" ADD COLUMN     "paperCode" SERIAL NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Paper_paperCode_key" ON "Paper"("paperCode");
