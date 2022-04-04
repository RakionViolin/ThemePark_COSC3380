const mysql = require('mysql');

module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'root', /* MySQL User */
    password: 'pass', /* MySQL Password */
    database: 'node_restapi' /* MySQL Database */
  });