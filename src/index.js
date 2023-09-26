import express from 'express';
import employeesRoutes from './routes/employees.routes.js';
import indexRoutes from './routes/index.routes.js';

const app = express();

// Rutas de la app:
app.use(indexRoutes);
app.use(employeesRoutes);

// Arrancamos el servidor:
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server on http://127.0.0.1:${PORT}`);
});
