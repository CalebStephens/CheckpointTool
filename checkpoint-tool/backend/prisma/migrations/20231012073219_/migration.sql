/*
  Warnings:

  - Added the required column `email` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Student_studentId_key";

-- AlterTable
ALTER TABLE "Paper" ALTER COLUMN "labTotal" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "email" TEXT NOT NULL;
