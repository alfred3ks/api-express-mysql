import pool from '../db.js';

// Controller:
// GET: http://localhost:3000/api/
export const getHome = (req, res, next) => {
  res.send('Api home');
};

// GET: http://localhost:3000/api/employees
export const getEmployees = async (req, res) => {
  // Para el manejo de errores usaremos trycatch: Lo usado en funciones asincronas:
  try {
    // throw new Error('DB Error');
    const [rows] = await pool.query('SELECT * FROM employees');
    res.json(rows);
    console.log(rows);
  } catch (error) {
    return res.status(500).json({ message: 'Algo ha salido mal.' });
  }
};

// Middleware que retorna un elemento:
// GET: http://localhost:3000/api/employees/5
export const getEmployee = async (req, res) => {
  try {
    // throw new Error('DB Error');
    const { id } = req.params;
    const [row] = await pool.query('SELECT * FROM employees where id = ?', [
      id,
    ]);
    if (row.length <= 0) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    console.log(row);
    res.json(row);
  } catch (error) {
    return res.status(500).json({ message: 'Algo ha salido mal.' });
  }
};

// Middleware de peticion post: Metemos valores a la BD:
// Usaremos postman o thunder client:
// POST: http://localhost:3000/api/employees/
// Recuerda pasar parametros en el body:
export const createEmployees = async (req, res) => {
  try {
    // Aqui seria bueno hacer la validaciones:
    const { name, salary } = req.body;
    const [rows] = await pool.query(
      'INSERT INTO employees (name, salary) VALUES (?, ?)',
      [name, salary]
    );
    res.json({ id: rows.insertId, name, salary });
  } catch (error) {
    return res.status(500).json({ message: 'Algo ha salido mal' });
  }
};

// Middleware para borrar datos en la BD, empleados:
// DELETE: http://localhost:3000/api/employees/5
export const deleteEmployees = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query('DELETE FROM employees WHERE id = ?', [
      id,
    ]);
    console.log(result);
    if (result.affectedRows <= 0) {
      return res.status(404).send('El empleado no existe.');
    }
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: 'Algo ha salido mal' });
  }
};

// Podemos actualizar todo el objeto o parcialmente los datos:
// Middleware para actualizar un empleado en BD:
// PATCH: http://localhost:3000/api/employees/5
// Recuerda pasar el objeto por el body con la nueva informacion:
export const updateEmployees = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, salary } = req.body;
    console.log(id, name, salary);
    // Actualizamos el empleado:
    const [result] = await pool.query(
      // Para el metodo patch() Usamos IFNUL():
      'UPDATE employees SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?',
      [name, salary, id]
    );
    console.log(result);

    if (result.affectedRows === 0) {
      return res.status(404).json('El empleado no existe.');
    }
    // Vemos el usuario que hemos actualizado:
    const userActualizado = await pool.query(
      'SELECT * FROM employees where id = ?',
      [id]
    );
    console.log(userActualizado[0]);
    res.json({ 'Empleado actualizado': userActualizado[0] });
  } catch (error) {
    return res.status(500).json({ message: 'Algo ha salido mal' });
  }
};
