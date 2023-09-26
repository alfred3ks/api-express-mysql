// Routes:
import { Router } from 'express';
import {
  getHome,
  getEmployees,
  getEmployeeId,
  createEmployees,
  updateEmployees,
  deleteEmployees,
} from '../controllers/employees.controller.js';

const router = Router();

router.get('/', getHome);

router.get('/employees', getEmployees);
router.get('/employees/:id', getEmployeeId);

router.post('/employees', createEmployees);

/*
.patch():
Esta peticion hace lo mismo que put pero solo pasamos lo que vamos a actualizar con put tenemos que pasar todo el objeto, si no lo hacemos los datos que no pasamos los guarda como null, ya que son undefined.
*/
router.patch('/employees/:id', updateEmployees);

router.delete('/employees/:id', deleteEmployees);

export default router;
