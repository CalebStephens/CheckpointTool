-- CreateTable
CREATE TABLE "Paper" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "checkpointLabs" INTEGER[],

    CONSTRAINT "Paper_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tool" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "xCat" TEXT NOT NULL,
    "yCat" TEXT NOT NULL,
    "northLabel" TEXT NOT NULL,
    "southLabel" TEXT NOT NULL,
    "eastLabel" TEXT NOT NULL,
    "westLabel" TEXT NOT NULL,
    "paperId" INTEGER,

    CONSTRAINT "Tool_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "labResponses" JSONB[],
    "paperId" INTEGER,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Tool" ADD CONSTRAINT "Tool_paperId_fkey" FOREIGN KEY ("paperId") REFERENCES "Paper"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_paperId_fkey" FOREIGN KEY ("paperId") REFERENCES "Paper"("id") ON DELETE CASCADE ON UPDATE CASCADE;
