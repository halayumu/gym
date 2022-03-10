// const express = require('express')
// const app = express()
// const port = 3000


// app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//----[mysql処理]----//
// // const mysql = require('mysql');

// // const con = mysql.createConnection({
// //     host: 'localhost',
// //     user: 'root',
// //     password: '',
// //     database: 'gym'
// // });

// // con.connect(function(err) {
// //     if (err) throw err;
// //     console.log('Connected');
// // });

// // app.get('/', (request, response) => {
// //     const sql = "select * from items"
// //     con.query(sql, function(err, result, fields) {
// //         if (err) throw err;
// //         response.send(result)
// //     });
// // });

// // const sql = "INSERT INTO items(name) VALUES('kevin')"

// // con.query(sql, function(err, result, fields) {
// //     if (err) throw err;
// //     console.log(result)
// // }

/////////////////////////////////

//----[入力フォーム表示処理]----//
// const path = require('path');
// app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../tpl/signUp.html')))


//----[フォームの値を取得表示処理]----//
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use(bodyParser.urlencoded({ extended: true }));

// const path = require('path');
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../tpl/signUp.html')))

app.post('/', (req, res) => res.send(req.body)) //追加