-- DropForeignKey
ALTER TABLE "Paper" DROP CONSTRAINT "Paper_toolId_fkey";

-- AddForeignKey
ALTER TABLE "Paper" ADD CONSTRAINT "Paper_toolId_fkey" FOREIGN KEY ("toolId") REFERENCES "Tool"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
