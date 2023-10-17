import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAllPapers = async (req, res) => {
  try {
    const papers = await prisma.paper.findMany({ include: { tool: true, students: true } });
    return res.status(200).json({ data: papers });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getPaper = async (req, res) => {
  try {
    const paper = await prisma.paper.findUnique({
      where: { id: Number(req.params.id) },
      include: { students: true, tool: true },
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
    return res.status(201).json({ data: paper, msg: "Paper created" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getLabs = async (req, res) => {
  try{
    const { id } = req.params;
    const paper = await prisma.paper.findUnique({
      where: { id: Number(id) },
    });
    return res.status(200).json({ data: paper.labs });
  }
  catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

const updatePaper = async (req, res) => {
  try {
    const { id } = req.params;
    const paper = await prisma.paper.findUnique({
      where: { id: Number(id) },
    });

    if (!paper) {
      return res.status(404).json({ error: `Paper with id ${id} not found` });
    }

    console.log(paper)
  

    // const updatedPaper = await prisma.paper.update({
    //   where: { id: Number(id) },
    //   data: {
    //     labTotal: paper.labTotal,
    //     checkpointLabs: paper.checkpointLabs,
    //   },
    // });

    console.log(paper);
    // return res.status(200).json({ data: updatedPaper, msg: "Paper updated" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export { getAllPapers, createPaper, getPaper, updatePaper, getLabs };
