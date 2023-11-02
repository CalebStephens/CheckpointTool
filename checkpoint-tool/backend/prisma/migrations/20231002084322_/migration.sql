-- DropForeignKey
ALTER TABLE "Paper" DROP CONSTRAINT "Paper_toolId_fkey";

-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_paperId_fkey";

-- AlterTable
ALTER TABLE "Student" ALTER COLUMN "paperId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Paper" ADD CONSTRAINT "Paper_toolId_fkey" FOREIGN KEY ("toolId") REFERENCES "Tool"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_paperId_fkey" FOREIGN KEY ("paperId") REFERENCES "Paper"("id") ON DELETE CASCADE ON UPDATE CASCADE;
