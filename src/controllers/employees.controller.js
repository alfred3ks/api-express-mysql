// Controller:

export const getEmployees = (req, res) => {
  res.send('Solicitando empleados.');
};

export const createEmployees = (req, res) => {
  res.send('Creando empleados.');
};

export const updateEmployees = (req, res) => {
  res.send('Actualizando empleados.');
};

export const deleteEmployees = (req, res) => {
  res.send('Borrando empleados.');
};
