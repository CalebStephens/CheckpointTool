import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAllStudents = async (req, res) => {
  try {
    const students = await prisma.student.findMany();
    return res.status(200).json({ data: students });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getStudent = async (req, res) => {
  try {
    const student = await prisma.student.findUnique({
      where: { id: Number(req.params.id) },
    });
    return res.status(200).json({ data: student });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createStudent = async (req, res) => {
  try {
    const { name, paperId } = req.body;
    const student = await prisma.student.create({
      data: {
        name,
        paperId,
      },
    });
    return res.status(201).json({ data: student, msg: 'Student created' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export { getAllStudents, createStudent, getStudent };
