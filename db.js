const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'apartment'
})
connection.connect(function (error) { if (error) console.log(error) })

module.exports = connection