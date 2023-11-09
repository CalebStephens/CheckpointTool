import { Router } from "express";
const router = Router();

import { getAllStudents, getStudent, createStudent, updateStudentResponse, deleteStudent, deleteAllStudents } from "../../controllers/v1/students.js";

router.route("/").get(getAllStudents);
router.route("/:id").get(getStudent);
router.route("/create").post(createStudent);
router.route("/labResponse").put(updateStudentResponse);
router.route("/delete/:id").delete(deleteStudent);
router.route("/deleteAll").delete(deleteAllStudents);

export default router;
