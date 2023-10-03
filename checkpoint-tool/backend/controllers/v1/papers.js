import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAllPapers = async (req, res) => {
  try {
    const papers = await prisma.paper.findMany({include: {tool: true, students: true}});
    return res.status(200).json({ data: papers });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getPaper = async (req, res) => {
  try {
    const paper = await prisma.paper.findUnique({
      where: { id: Number(req.params.id) },
      include: {students: true},
    });
    return res.status(200).json({ data: paper });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createPaper = async (req, res) => {
  try {
    const { name } = req.body;
    const paper = await prisma.paper.create({
      data: {
        name,
      },
    });
    return res.status(201).json({ data: paper, msg: 'Paper created' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export { getAllPapers, createPaper, getPaper };
