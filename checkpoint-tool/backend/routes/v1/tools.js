/*
 * This file contains routes for user authentication, including registration and login.
 * It uses the Express router to define the routes.
 */

import { Router } from 'express';
const router = Router();

import { getAllTools, getTool, createTool } from '../../controllers/v1/tool.js';

router.route('/').get(getAllTools);
router.route('/:id').get(getTool);
router.route('/create').post(createTool);

export default router;
