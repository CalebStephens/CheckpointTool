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

const getTool = async (req, res) => {
  try {
    const tool = await prisma.tool.findUnique({
      where: { id: Number(req.params.id) },
    });
    return res.status(200).json({ data: tool });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createTool = async (req, res) => {
  try {
    const { title, xCat, yCat, northLabel, southLabel, eastLabel, westLabel } = req.body;
    const tool = await prisma.tool.create({
      data: {
        title,
        xCat,
        yCat,
        northLabel,
        southLabel,
        eastLabel,
        westLabel,
      },
    });
    return res.status(201).json({ data: tool, msg: 'Tool created' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export { getAllTools, createTool, getTool };
