import { Router } from 'express';

const router = Router();

router.get('/employees', (req, res, next) => {
  res.send('Solicitando empleados.');
});
router.post('/employees', (req, res, next) => {
  res.send('Creando empleados.');
});
router.put('/employees', (req, res, next) => {
  res.send('Actualizando empleados');
});
router.delete('/employees', (req, res, next) => {
  res.send('Borrando empleados.');
});

export default router;
