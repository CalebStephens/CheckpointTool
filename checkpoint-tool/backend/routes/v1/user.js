import { Router } from 'express';
const router = Router();

import {getAllAdmins, deleteAdmin} from '../../controllers/v1/user.js';

router.route('/').get(getAllAdmins);
router.route('/:id').delete(deleteAdmin);

export default router;