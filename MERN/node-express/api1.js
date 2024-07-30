const express = require("express");    //Calling Express Framework
const app = express();                 //Creating object of express
const cors = require("cors");          //calling cors origin library to allow data commmuniacation between 2 server
app.use(cors());                       //creating objects of cors library
app.use(express.json());               //

//http://localhost1111/
app.get("/", (req, res)=>{
    let message = "<h1> API server is live </h1>"
    res.send(message);
    res.end();
})

//http://localhost:1111/userlist
app.get("/userlist", (req, res)=>{
    let user = ['Mohit','Manan','Mihir','Mahima','Mrinal'];
    let jsonData = JSON.stringify(user);    //array to json
    res.send(jsonData);
    res.end();
})

//http://localhost:1111/booklist
app.get("/booklist", (req, res)=>{
    let allbook = [
        {name:'HTML', cost:3000, author:'Mahima'},
        {name:'CSS', cost:4000, author:'Mohit'},
        {name:'BootStrap', cost:5000, author:'Mihir'}
    ]

    let jsonData = JSON.stringify(allbook);    //array to json
    res.send(jsonData);
    res.end();
})


app.listen(1111, function(){
    console.log("server started on http://localhost1111");
})