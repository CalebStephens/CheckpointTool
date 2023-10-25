import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAllStudents = async (req, res) => {
  try {
    console.log("getAll");
    const students = await prisma.student.findMany();
    return res.status(200).json({ data: students });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getStudent = async (req, res) => {
  try {
    console.log(req.params.id)
    const student = await prisma.student.findUnique({
      where: { id: Number(req.params.id) },
    });
    console.log(student);
    return res.status(200).json({ data: student });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createStudent = async (req, res) => {
  try {
    console.log(req.body);
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

const updateStudentResponse = async (req, res) => {
  try {
    const labResponse = {
      answers: req.body.answers,
      lab: req.body.student.lab,
    }

    const student = await prisma.student.findUnique({
      where: { studentId: Number(req.body.student.studentId) },
    });

    student.labResponses.push(labResponse);

    const updatedStudent = await prisma.student.update({
      where: { studentId: Number(req.body.student.studentId) },
      data: {
        labResponses: student.labResponses,
      },
    });

    return res.status(200).json({ data: updatedStudent, msg: "Student updated" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteStudent = async (req, res) => {
  try {
    console.log(req);
    const deletedStudent = await prisma.student.delete({
      where: { id: Number(req.params.id) },
    });
    return res.status(200).json({ data: deletedStudent });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteAllStudents = async (req, res) => {
  try {
    console.log('here');
    const deleted = await prisma.student.deleteMany();
    return res.status(200).json({ data: deleted });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export { getAllStudents, createStudent, getStudent, updateStudentResponse, deleteStudent, deleteAllStudents };
