import pool from '../db.js';

export const home = (req, res, next) => {
  res.send('Home app');
};

export const ping = async (req, res, next) => {
  const [result] = await pool.query('select "pong" as result');
  res.send(result);
};
