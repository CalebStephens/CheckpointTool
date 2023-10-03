/*
 * This file contains routes for user authentication, including registration and login.
 * It uses the Express router to define the routes.
 */

import { Router } from 'express';
const router = Router();

import { getAllPapers, getPaper, createPaper } from '../../controllers/v1/papers.js';

router.route('/').get(getAllPapers);
router.route('/:id').get(getPaper);
router.route('/create').post(createPaper);

export default router;
