import express from 'express';

const app = express();

// Arrancamos el servidor:
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server on http://127.0.0.1:${PORT}`);
});
