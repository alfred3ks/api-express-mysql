import pool from '../db.js';

// Controller:
export const getEmployees = async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM employees');
  res.json(rows);
};

// Middleware de peticion post: Metemos valores a la BD:
export const createEmployees = async (req, res) => {
  // Aqui seria bueno hacer la validadcion:
  const { name, salary } = req.body;
  const [rows] = await pool.query(
    'INSERT INTO employees (name, salary) VALUES (?, ?)',
    [name, salary]
  );
  res.json({ id: rows.insertId, name, salary });
};

export const updateEmployees = (req, res) => {
  res.send('Actualizando empleados.');
};

export const deleteEmployees = (req, res) => {
  res.send('Borrando empleados.');
};
