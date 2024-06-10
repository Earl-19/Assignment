const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'earl1997',
    database: 'ecommerce'
});

connection.connect(err => {
    if (err) throw err;
    console.log('Database connected!');
});

module.exports = connection;
