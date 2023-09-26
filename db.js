import { createPool } from 'mysql2/promise';

const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: '1234',
  port: 3306,
  database: 'companydb',
});

export default pool;
