/*
  Warnings:

  - You are about to drop the column `checkpointLabs` on the `Paper` table. All the data in the column will be lost.
  - You are about to drop the column `labTotal` on the `Paper` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Paper" DROP COLUMN "checkpointLabs",
DROP COLUMN "labTotal",
ADD COLUMN     "labs" JSONB[];
