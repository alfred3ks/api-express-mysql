import { Router } from 'express';
import { ping, home } from '../controllers/index.controller.js';

const router = Router();

// Definimos las rutas de la app:
router.get('/', home);

// Hacemos consulta a BD:
router.get('/ping', ping);

export default router;
