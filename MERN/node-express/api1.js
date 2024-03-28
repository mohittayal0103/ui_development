const express = require("express"); //calling express framework
const app = express(); // creating object of express
const cors = require("cors"); // calling cors origin library to allow data communication between 2 server
app.use(cors()); // creating oject of cors library
app.use(express.json()); // enable json data communication

app.get("/", function (req, res) {
  res.send("<h1> The Server is Live Now! </h1>");
});

app.get("/booklist", (req, res) => {
  let booklist = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "NodeJS",
    "MongoDB",
    "Express",
  ];

  let jsonData = JSON.stringify(booklist);
  res.send(jsonData);
}); //http://localhost:2222/booklist

app.get("/allbook", (req, res) => {
  let allbook = [
    { name: "html", price: 3000, seller: "Uttu" },
    { name: "CSS", price: 4000, seller: "Mohit" },
    { name: "React", price: 5000, seller: "Mihir" },
    { name: "NodeJS", price: 6000, seller: "Mrinal" },
    { name: "MongoDB", price: 7000, seller: "Manan" },
  ];

  let jsonData = JSON.stringify(allbook);
  res.send(jsonData);
}); //http://localhost:2222/allbook


app.listen(2222, function () {
  console.log("Server Started on http://localhost:2222");
});
