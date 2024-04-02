const express = require("express"); //calling express framework
const app = express(); // creating object of express
const cors = require("cors"); // calling cors origin library to allow data communication between 2 server
app.use(cors()); // creating oject of cors library
app.use(express.json()); // enable json data communication
const fs = require("fs"); //fs is a module just used for file read-write system

//--------------------------------------------------------

app.get("/", function (req, res) {
  res.send("<h1> The Server is Live Now! </h1>");
});

//--------------------------------------------------------

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

//--------------------------------------------------------

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

//--------------------------------------------------------

app.get("/allbook1", (req, res) => {
  let allbook1 = [
    { name: "HTML", price: 3000, seller: "Uttu", city: ["bangalore", "pune"] },
    { name: "CSS", price: 4000, seller: "Mohit", city: ["chennai", "hyderabad", "bangalore"] },
    { name: "React", price: 5000, seller: "Mihir", city: ["delhi"] },
    { name: "NodeJS", price: 6000, seller: "Mrinal", city: ["mumbai"] },
    { name: "MongoDB", price: 7000, seller: "Manan", city: [] },
  ];

  let jsonData = JSON.stringify(allbook1);
  res.send(jsonData);
}); //http://localhost:2222/allbook1

//--------------------------------------------------------

app.get("/alldata", (req, res) => {
  let alldata = {
    citylist: ["Bangalore", "Chennai", "Kolkata", "Delhi", "Patna", "Mumbai"],
    userlist: ["Alex", "Sumit", "Mohit", "Raj", "Manoj", "Puri"],
    booklist: ["HTML", "CSS", "BootStrap", "JavaScript", "React", "Node"],
  };

  let jsonData = JSON.stringify(alldata);
  res.send(jsonData);
}); //http://localhost:2222/alldata

//--------------------------------------------------------

app.post("/savemsg", (req, res) => {
  let data = req.body.mymessage.trim();

  if (data == "") {
    let jsonData = JSON.stringify({ message: "Invalid Message !" });
    res.send(jsonData);
  } 
  else {
    data = data + " - Posted on: " + new Date().toLocaleString() + "\n";
    fs.appendFile("allmessage.txt", data, function(err, filedata){
      let jsonData = JSON.stringify({message: "Message Received Successfully !"});
      res.send(jsonData);
    }); // post new content into a file through append file func
  }
}); //http://localhost:2222/savemsg 

//--------------------------------------------------------

app.listen(2222, function () {
  console.log("Server Started on http://localhost:2222");
});
 