import { PrismaClient } from "@prisma/client";

import { tool } from "../data/tool.js";

const prisma = new PrismaClient();

const seedTools = async () => {

  await prisma.tool.createMany({ data: tool });
  console.log("Tools Created");
};

seedTools()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });

export {seedTools};
