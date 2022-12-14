const express = require('express')
const app = express()
const cors = require('cors')
const mysql = require('mysql')
const bodyParser = require('body-parser')

var server = {
  port: 4000
};

app.use(cors())
app.use(bodyParser.json());

// starting the server
app.listen( server.port , () => console.log(`Server started, listening port: ${server.port}`));

// setup database
db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'DB_LoginApp'
})

app.get('/', (req, res) => {
  res.send('Welcome to the Node.js');
});

app.get('/dbTest', (req, res) => { 
  const sqlShowTables = "SHOW TABLES"
  db.query(sqlShowTables, (err, result) => {
      console.log(result)
      res.send(result)
  })
});

app.get('/usersList', (req, res) => { 
  const sqlShowTables = "Select * from Users";
  db.query(sqlShowTables, (err, result) => {
      console.log(result)
      res.send(result)
  })
});