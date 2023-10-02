/*
 * This file contains routes for user authentication, including registration and login.
 * It uses the Express router to define the routes.
 */

import { Router } from 'express';
const router = Router();

import { getAllPapers } from '../../controllers/v1/papers.js';

router.route('/').get(getAllPapers);

export default router;
