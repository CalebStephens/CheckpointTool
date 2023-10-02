import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAllTools = async (req, res) => {
  try {
    const tools = await prisma.tool.findMany();
    return res.status(200).json({ data: tools });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export { getAllTools };
