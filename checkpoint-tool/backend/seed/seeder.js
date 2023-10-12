import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
  try {
    await prisma.tool.create({
      data: {
        title: "Tool 1",
        questions: [
          {
            question: "Use the grid to choose the point that best describes your opinion of today's lab.",
            labels: {
              x: {
                left: "Easy",
                right: "Hard",
              },
              y: {
                top: "Interesting",
                bottom: "Boring",
              },
            },
          },
          {
            question: "Use the grid to choose the point that best describes your opinion of today's lab.",
            labels: {
              x: {
                left: "Content was all new",
                right: "Content was all familiar",
              },
              y: {
                top: "I could confidently start on my own",
                bottom: "I needed help to get started",
              },
            },
          },
          {
            question: "Use the grid to choose the point that best describes your opinion of today's lab.",
            labels: {
              x: {
                left: "My Programming Skills have not improved",
                right: "My Programming Skills have improved",
              },
              y: {
                top: "I feel triumphant",
                bottom: "I feel frustrated",
              },
            },
          },
        ],
      },
    });

    await prisma.paper.create({
      data: {
        name: "Paper 1",
      },
    });

    await prisma.student.create({
      data: {
        name: "Student One",
        studentId: 101010,
        email: "student@outlook.co.nz",
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
