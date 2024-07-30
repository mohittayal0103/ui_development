const http = require("http");

http
  .createServer(function (req, res) {
    //creating api function

    res.writeHead(200, { "Content-Type": "text/html" });

    res.write("<h1>Welcome to Node 1st API.</h1>");

    res.write("<p>It's Working!</p>");

    res.write("<p>End is commented!</p>");

    res.end();
  })
  .listen(1111); //http://localhost:1111              //api function completed



  // this page is used to understand how we write a code for backend -> this is a code of server side response to client can say it as  API.