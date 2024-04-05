const express = require("express"); //calling express framework
const app = express(); // creating object of express
const cors = require("cors"); // calling cors origin library to allow data communication between 2 server
app.use(cors()); // creating oject of cors library
app.use(express.json()); // enable json data communication

const mongoose = require("mongoose"); // calling mongoose
mongoose.connect("mongodb://127.0.0.1:27017/company") // importing mongoose database
const db = mongoose.connection;

//checking connection is established or not 
db.on("error", (error)=>console.log("Error in database connection")); 
db.on("open", ()=>console.log("Database is Connected..."));

const User = require("./userapi");

app.use("/user", User); 
// http://localhost:4444/user (get,post,put,delete)

app.listen(4444, function(){
    console.log("The server is live...")
})