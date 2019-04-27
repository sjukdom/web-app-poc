const mysql = require("mysql");
const {
  promisify
} = require('util');

const pool = mysql.createPool({
  connectionLimit: 50,
  host: "localhost",
  user: "root",
  password: "rootpwdpass",
  database: "artist"
});

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('DATABASE CONNECTION WAS CLOSED');
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('DATABASE HAS TOO MANY CONNECTIONS');
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('DATABASE CONNECTION WAS REFUSED');
    }
  }
  if (connection) {
    connection.release();
  }
  console.log('DB is connected');
  return;
});

// Consulta a la base de datos en forma de promesas
// y no de callbacks
// promisify(pool.query);

module.exports = pool;
