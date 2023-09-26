// Routes:

import { Router } from 'express';
import {
  getEmployees,
  getEmployeeId,
  createEmployees,
  updateEmployees,
  deleteEmployees,
} from '../controllers/employees.controller.js';

const router = Router();

router.get('/employees/:id', getEmployeeId);
router.get('/employees', getEmployees);
router.post('/employees', createEmployees);
router.put('/employees', updateEmployees);
router.delete('/employees', deleteEmployees);
router.delete('/employees/:id', deleteEmployees);

export default router;
