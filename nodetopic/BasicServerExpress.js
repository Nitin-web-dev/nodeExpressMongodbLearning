//import express module
const express = require("express");
// import bodyParser to get req in body or url bassed
const bodyParser = require("body-parser");

//make app
const app = express();

//make port
const PORT = 8080;

//make and middleware to parse incoming request in url and bodies
// make body-parser middle to parse req in url or body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//defne routes
app.get("/", (req, res) => {
  res.json({ message: "hello world" });
  res.end();
});

app.get("/apis", (req, res) => {
  res.json({
    _id: 2837492734,
    user: "user1",
  });
  res.end();
});

app.post("/apis/post", (req, res) => {
  const data = req.body;
  console.log(data);

  res.send("recieved the data:" + JSON.stringify(data));
});

app.post("/apis/create", (req, res) => {
  const data = req.body;

  console.log(data);
  res.json({ message: "created succesfful ok", status: '201' });
});

app.put('/apis/put',(req,res) => {
    const data = req.body;
    const {_id, user } = data;

    console.log(data);

    res.json({message: 'updated', status: '201'});
})



app.listen(PORT, () => console.log(`server is on ${PORT}`));
