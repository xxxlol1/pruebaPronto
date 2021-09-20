const mysql = require("mysql2");

const data = {
  host: "localhost",
  user: "root",
  password: "root",
  database: "prontobpo",
  port: 3306,
};

const msyql = mysql.createConnection(data);

msyql.connect((err) => {
  if (err) {
    console.log(err, " >> No conecto la base de datos");
  }
  console.log(" >> Conexion a la base de Datos, establecida");
  console.log(" >> Corriendo en los puertos: " + data.port);
});

module.exports = msyql;
