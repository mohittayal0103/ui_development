let http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });

    for (let i = 1; i <= 10; i++) {
      res.write("<p>" + i + "</p>");
    }
    res.end();
    // res.write("<p>dsaghskahkdsj</p>"); -> It won't print because response in ended in above line. 
  })
  .listen(1234);

  //http://localhost:1234

  //HomeWork
  //in mern folder open cmd and after that we have to setup 2 projects npx create-react-app project1 and project2
  //open mongoDB Website -> Products -> community edition -> scroll down-select package -> version 7.0.7 package msi download