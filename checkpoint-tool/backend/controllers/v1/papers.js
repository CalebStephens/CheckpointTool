// Handles all requests to the /api/v1/papers route

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Function to get all papers, including associated tools and students
const getAllPapers = async (req, res) => {
  try {
    // Retrieve all papers from the database and include associated tools and students
    const papers = await prisma.paper.findMany({ include: { tool: true, students: true } });
    return res.status(200).json({ data: papers });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Function to get a specific paper by its ID, including associated students and tools
const getPaper = async (req, res) => {
  try {
    // Retrieve a paper by its ID and include associated students and tools
    const paper = await prisma.paper.findUnique({
      where: { id: Number(req.params.id) },
      include: { students: true, tool: true },
    });
    return res.status(200).json({ data: paper });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Function to create a new paper with a given name
const createPaper = async (req, res) => {
  try {
    // Extract the "name" property from the request body
    const { name } = req.body;
    // Create a new paper with the provided name
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

// Function to get the labs associated with a specific paper by its ID
const getLabs = async (req, res) => {
  try {
    const { id } = req.params;
    // Retrieve the paper by its ID and return the associated labs
    const paper = await prisma.paper.findUnique({
      where: { id: Number(id) },
    });
    return res.status(200).json({ data: paper.labs });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Function to update the labs of a specific paper by its ID
const updateLabs = async (req, res) => {
  try {
    const { id } = req.params;
    // Retrieve the paper by its ID
    const paper = await prisma.paper.findUnique({
      where: { id: Number(id) },
    });

    // Check if the paper exists
    if (!paper) {
      return res.status(404).json({ error: `Paper with id ${id} not found` });
    }

    // Update the labs of the paper with the provided data from the request body
    const updatedPaper = await prisma.paper.update({
      where: { id: Number(id) },
      data: {
        labs: req.body,
      },
    });

    return res.status(200).json({ data: updatedPaper, msg: "Paper updated" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Export the functions to be used in other parts of the application
export { getAllPapers, createPaper, getPaper, getLabs, updateLabs };
