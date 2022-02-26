const express = require('express')
const app = express()
const port = 3000


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gym'
});

con.connect(function(err) {
    if (err) throw err;
    console.log('Connected');
});

// con.connect(function(err) {
//     // if (err) throw err;
//     console.log('Connected');
//     const sql = "select * from items"
//     con.query(sql, function(err, result, fields) {
//         // if (err) throw err;
//         console.log(result)
//     });
// });

app.get('/', (request, response) => {
    const sql = "select * from items"
    con.query(sql, function(err, result, fields) {
        if (err) throw err;
        response.send(result)
    });
});