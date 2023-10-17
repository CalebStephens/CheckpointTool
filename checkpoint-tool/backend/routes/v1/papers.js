/*
 * This file contains routes for user authentication, including registration and login.
 * It uses the Express router to define the routes.
 */

import { Router } from 'express';
const router = Router();

import { getAllPapers, getPaper, createPaper, updatePaper, getLabs } from '../../controllers/v1/papers.js';

router.route('/').get(getAllPapers);
router.route('/:id').get(getPaper);
router.route('/labs/:id').get(getLabs);
router.route('/create').post(createPaper);
router.route('/update/:id').put(updatePaper);

export default router;
