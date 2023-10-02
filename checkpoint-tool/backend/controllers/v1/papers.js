import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAllPapers = async (req, res) => {
  try {
    const papers = await prisma.paper.findMany({include: {tool: true}});
    return res.status(200).json({ data: papers });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export { getAllPapers };
