import { Router } from 'express';
import pool from '../db.js';

const router = Router();

// Hacemos consulta a BD:
router.get('/ping', async (req, res, next) => {
  const [result] = await pool.query('select "pong" as result');
  res.send(result);
});

// Definimos las rutas de la app:
router.get('/', (req, res, next) => {
  res.send('Home app');
});

export default router;
