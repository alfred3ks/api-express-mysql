// Archivo de arranque de nuestra aplicacion:
import app from './app.js';

// Importamos el archivo config que lee las variables de entorno:
import { PORT } from './config.js';

// Arrancamos el servidor:
// El port lo leemos de variable de entorno .env:
app.listen(PORT, () => {
  console.log(`Server on http://127.0.0.1:${PORT}`);
});
