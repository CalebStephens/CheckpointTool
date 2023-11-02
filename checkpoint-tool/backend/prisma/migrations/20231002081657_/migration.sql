-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_paperId_fkey";

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_paperId_fkey" FOREIGN KEY ("paperId") REFERENCES "Paper"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
