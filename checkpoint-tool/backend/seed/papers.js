import { PrismaClient } from "@prisma/client";

import { papers } from "../data/papers.js";

const prisma = new PrismaClient();

const seedPapers = async () => {
  await prisma.paper.createMany({ data: papers });
  console.log("Papers Created");
};

seedPapers()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });

export {seedPapers};