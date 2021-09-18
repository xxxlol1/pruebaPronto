const mysql = require('mysql2');

const msyql = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'prontobpo',
    port:3306

});

msyql.connect(err =>{
    if (err) {
        console.log(err, 'No conecto la base de datos');
    }
    console.log('base datos conectada');
  
});

module.exports = msyql;