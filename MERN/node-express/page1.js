let http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type":"text/html" });

    for (let i = 1; i <= 10; i++) {
      res.write("<p>" + i + "</p>");
    }
    res.end();
    // res.write("<p>dsaghskahkdsj</p>"); -> It won't print because response is ended in above line. 
  })
  .listen(1234);