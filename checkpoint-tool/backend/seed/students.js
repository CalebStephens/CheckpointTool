import { PrismaClient } from "@prisma/client";

import { students } from "../data/students.js";

const prisma = new PrismaClient();

const seedStudents = async () => {
  await prisma.student.createMany({ data: students });
  console.log("Students Created");
};

seedStudents()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });

export {seedStudents};