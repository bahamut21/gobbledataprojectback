const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '@HaLesCrocodiles13',
  database: 'gobbledatas'
});

module.exports = connection;