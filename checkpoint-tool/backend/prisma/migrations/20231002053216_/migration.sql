/*
  Warnings:

  - You are about to drop the column `paperId` on the `Tool` table. All the data in the column will be lost.
  - Made the column `paperId` on table `Student` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Tool" DROP CONSTRAINT "Tool_paperId_fkey";

-- AlterTable
ALTER TABLE "Paper" ADD COLUMN     "toolId" INTEGER;

-- AlterTable
ALTER TABLE "Student" ALTER COLUMN "paperId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Tool" DROP COLUMN "paperId";

-- AddForeignKey
ALTER TABLE "Paper" ADD CONSTRAINT "Paper_toolId_fkey" FOREIGN KEY ("toolId") REFERENCES "Tool"("id") ON DELETE CASCADE ON UPDATE CASCADE;
