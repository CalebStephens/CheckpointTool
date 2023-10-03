import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
  try {
    await prisma.tool.create({
      data: {
        title: 'Tool 1',
        xCat: 'Category 1',
        yCat: 'Category 2',
        northLabel: 'North',
        southLabel: 'South',
        eastLabel: 'East',
        westLabel: 'West',
      },
    });

    await prisma.paper.create({
      data: {
        name: 'Paper 1',
      },
    });

    await prisma.student.create({
      data:{
      name: "Student One",
      paperId: 1,
      },
    });

    console.log("Database successfully seeded");

    await prisma.$disconnect(); // Disconnect from the database
  } catch (err) {
    console.error(err);
    await prisma.$disconnect(); 
    process.exit(1); // Exit the process
  }
};

main();