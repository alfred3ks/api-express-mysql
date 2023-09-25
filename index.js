import express from 'express';

const app = express();

// Definimos las rutas de la app:
app.get('/', (req, res, next) => {
  res.send('Home app');
});

app.get('/empleados', (req, res, next) => {
  res.send('Solicitando empleados.');
});
app.post('/empleados', (req, res, next) => {
  res.send('Creando empleados.');
});
app.put('/empleados', (req, res, next) => {
  res.send('Actualizando empleados');
});
app.delete('/empleados', (req, res, next) => {
  res.send('Borrando empleados.');
});

// Arrancamos el servidor:
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server on http://127.0.0.1:${PORT}`);
});
