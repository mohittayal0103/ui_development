const express = require("express"); // calling express framework
const app = express(); // creating object of express
const cors = require("cors"); // calling cors origin library to allow data communication between 2 server
app.use(cors()); // creating object of cors library
app.use(express.json());

app.get("/", function (req, res) {
  let message = "<h1> Api Server live </h1>";
  res.send(message);
  res.end();
});

// http://localhost:2222/userlist
app.get("/userlist", (req, res) => {
  let user = ["Alex", "Mahesh", "Ganesh", "Mohit", "Umesh"];
  let jsonData = JSON.stringify(user); // array to json
  res.send(jsonData);
  res.end();
});

// http://localhost:2222/booklist
app.get("/booklist", (req, res) => {
  let allbook = [
    { name: "HTML", cost: 3000, author: "Alex" },
    { name: "CSS", cost: 6666, author: "Alex" },
    { name: "NODE", cost: 7777, author: "Alex" },
    { name: "PHP", cost: 33333, author: "Alex" },
    { name: "REACT", cost: 77777, author: "Alex" },
  ];
  let jsonData = JSON.stringify(allbook); // array to json
  res.send(jsonData);
  res.end();
});

// http://localhost:2222/savemsg
const fs = require("fs");

app.post("/savemsg", (req, res) => {

    const d = new Date();
    let time = d.toLocaleString();

  let message = time + " - " + req.body.newmsg + " #\n";
  fs.appendFile("allmessage.txt", message, function (error) {
    res.send("Hi, We have received your message!");
    res.end();
  });
});

// http://localhost:2222/messagelist
app.get("/messagelist", (req, res) => {
  fs.readFile("allmessage.txt", function (error, data) {
    res.send(data);
    res.end();
  });
});

app.listen(2222, function () {
  console.log("Sever Started on http://localhost:2222");
});
