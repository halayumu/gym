const express = require('express')
const app = express()
const port = 3000


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// const mysql = require('mysql');

// const con = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'gym'
// });

// con.connect(function(err) {
//     if (err) throw err;
//     console.log('Connected');
// });

// app.get('/', (request, response) => {
//     const sql = "select * from items"
//     con.query(sql, function(err, result, fields) {
//         if (err) throw err;
//         response.send(result)
//     });
// });

// const sql = "INSERT INTO items(name) VALUES('kevin')"

// con.query(sql, function(err, result, fields) {
//     if (err) throw err;
//     console.log(result)
// }


const path = require('path');
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../tpl/signUp.html')))