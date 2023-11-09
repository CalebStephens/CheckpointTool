// Desc: Controller for tool routes

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Get all tools
const getAllTools = async (req, res) => {
  try {
    const tools = await prisma.tool.findMany();
    return res.status(200).json({ data: tools });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Get a single tool by ID
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

// Create a new tool
const createTool = async (req, res) => {
  try {
    const { title, questions } = req.body;
    const tool = await prisma.tool.create({
      data: {
        title,
        questions,
      },
    });
    return res.status(201).json({ data: tool, msg: "Tool created" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Update an existing tool by ID
const updateTool = async (req, res) => {
  try {
    // Check if the tool with the specified ID exists
    const tool = await prisma.tool.findUnique({
      where: { id: Number(req.params.id) },
    });

    if (!tool) {
      return res.status(404).json({ error: "Tool not found" });
    }

    const { title, questions } = req.body;
    const updatedTool = await prisma.tool.update({
      where: { id: Number(req.params.id) },
      data: {
        title,
        questions,
      },
    });
    return res.status(200).json({ data: updatedTool, msg: "Tool updated" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export { getAllTools, createTool, getTool, updateTool };
