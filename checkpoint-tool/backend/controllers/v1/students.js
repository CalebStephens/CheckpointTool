import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Get all students
const getAllStudents = async (req, res) => {
  try {
    const students = await prisma.student.findMany();
    return res.status(200).json({ data: students });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Get a single student by ID
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

// Create a new student
const createStudent = async (req, res) => {
  try {
    const { name, paperId, studentId, email } = req.body;
    const student = await prisma.student.create({
      data: {
        name,
        studentId,
        email,
        paperId,
      },
    });
    return res.status(201).json({ data: student, msg: "Student created" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Update a student's lab responses
const updateStudentResponse = async (req, res) => {
  try {
    const labResponse = {
      answers: req.body.answers,
      lab: req.body.labName,
    };

    const student = await prisma.student.findUnique({
      where: { id: Number(req.body.student.id) },
    });

    student.labResponses.push(labResponse);

    const updatedStudent = await prisma.student.update({
      where: { id: Number(req.body.student.id) },
      data: {
        labResponses: student.labResponses,
      },
    });

    return res.status(200).json({ data: updatedStudent, msg: "Student updated" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Delete a student by ID
const deleteStudent = async (req, res) => {
  try {
    const deletedStudent = await prisma.student.delete({
      where: { id: Number(req.params.id) },
    });
    return res.status(200).json({ data: deletedStudent });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Delete all students
const deleteAllStudents = async (req, res) => {
  try {
    const deleted = await prisma.student.deleteMany();
    return res.status(200).json({ data: deleted });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export { getAllStudents, createStudent, getStudent, updateStudentResponse, deleteStudent, deleteAllStudents };
