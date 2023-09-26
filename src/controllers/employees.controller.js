import pool from '../db.js';

// Controller:
// http://localhost:3000/api/employees
export const getEmployees = async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM employees');
  res.json(rows);
};

// Middleware que retorna un elemento:
// http://localhost:3000/api/employees/5
export const getEmployeeId = async (req, res) => {
  const { id } = req.params;
  const [row] = await pool.query(`SELECT * FROM employees where id =${id}`);
  if (row.length <= 0) {
    return res.status(404).json({ message: 'Employee not found' });
  }
  console.log(row);
  res.json(row);
};

// Middleware de peticion post: Metemos valores a la BD:
// Usaremos postman o thunder client:
export const createEmployees = async (req, res) => {
  // Aqui seria bueno hacer la validaciones:
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

// Middleware para borrar datos en la BD, empleados:
// http://localhost:3000/api/employees/5
export const deleteEmployees = async (req, res) => {
  const id = req.params.id;
  const [result] = await pool.query('DELETE FROM employees WHERE id=?', [id]);
  console.log(result);

  if (result.affectedRows <= 0) {
    return res.status(404).send('El empleado no existe.');
  }
  res.sendStatus(204);
};
