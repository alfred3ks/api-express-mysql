import { createPool } from 'mysql2/promise';
// Importamos las variables de entorno:
import {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_PORT,
  DB_DATABASE,
} from './config.js';

// Usamos las variables de entorno:
const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DB_DATABASE,
});

export default pool;
