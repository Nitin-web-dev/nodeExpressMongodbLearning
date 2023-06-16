const express = require('express');


// make app
const app = express();


// port no 
const port = 3000;


// make app use json 
app.use(express.json());


// make get method api
app.get('/',(req,res) => res.end('hello there'));
app.get('/api',(req,res) => {
    res.json({ message: 'hello there'});
    res.end();
});




app.listen(port, () => console.log(`server is on ${port}`))