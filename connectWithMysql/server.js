// import the http module
const http = require('http');
const mysql = require('mysql');

//port name;
const port  = 8080;

let conn  = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
})

conn.connect((err) => {
    if(err) throw err;
    console.log('connected ');

    conn.query("CREATE DATABASE nodemysql", (err, result) => {
        if(err ) throw  err;
        console.log('db is created ');
    });

    
})

// create a server 
// http.createServer((req,res) => {
//     res.writeHead(200, {'Content-type':'text/plain'});
//     res.end("hellosdfasdfsfs");
//     console.log(__dirname);
//     console.log(__filename);

// }).listen(port, () => console.log(`port is on ${port}`));