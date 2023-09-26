import express from 'express';
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

// Manejo de errores si la ruta no existe:
app.use((req, res, next) => {
  res.status(404).json({ message: 'Endpoint not found.' });
});

export default app;
