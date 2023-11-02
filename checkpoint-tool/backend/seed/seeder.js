import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
  try {
    await prisma.tool.create({
      data: {
        title: "Tool 1",
        questions: [
          {
            question:
              "Use the grid to choose the point that best describes your opinion of today's lab.",
            labels: {
              x: {
                left: "Hard",
                right: "Easy",
              },
              y: {
                top: "Interesting",
                bottom: "Boring",
              },
            },
            currentCategory: {
              x: "Difficulty",
              y: "Interest",
            },
          },
          {
            question:
              "Use the grid to choose the point that best describes your opinion of today's lab.",
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
            currentCategory: {
              x: "Familiarity",
              y: "Plan",
            },
          },
          {
            question:
              "Use the grid to choose the point that best describes your opinion of today's lab.",
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
            currentCategory: {
              x: "Improvement",
              y: "Satisfaction",
            },
          },
        ],
      },
    });

    await prisma.paper.create({
      data: {
        name: "Paper 1",
        paperCode: 160,
        toolId: 1,
        labs: [
          {
            title: "Lab 1",
            checkpoint: true,
            password: "155",
          },
          {
            title: "Lab 2",
            checkpoint: true,
            password: "2510",
          },
        ],
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

    await prisma.user.create({
      data: {
        username: "Admin",
        password: "test",
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
