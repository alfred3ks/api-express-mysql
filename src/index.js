import express, { json } from 'express';
import employeesRoutes from './routes/employees.routes.js';
import indexRoutes from './routes/index.routes.js';

const app = express();

// Para poder manejar las rutas con el body:
app.use(express.json());

// Con esto cuando recibamos data por el body
app.use(express.urlencoded({ extended: false }));

// Rutas de la app:
app.use('/', indexRoutes);
app.use('/api', employeesRoutes);

// Arrancamos el servidor:
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server on http://127.0.0.1:${PORT}`);
});
