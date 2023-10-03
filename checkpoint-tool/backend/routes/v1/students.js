/*
 * This file contains routes for user authentication, including registration and login.
 * It uses the Express router to define the routes.
 */

import { Router } from 'express';
const router = Router();

import { getAllStudents, getStudent, createStudent } from '../../controllers/v1/students.js';

router.route('/').get(getAllStudents);
router.route('/:id').get(getStudent);
router.route('/create').post(createStudent);

export default router;