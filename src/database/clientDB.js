const mysql = require("mysql");

const connection = mysql.createPool({
  connectionLimit: 50,
  host: "localhost",
  user: "root",
  password: "rootpwdpass",
  database: "clients"
});

module.exports = connection;
