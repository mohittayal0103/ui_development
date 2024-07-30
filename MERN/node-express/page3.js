const http = require("http");

http
  .createServer(function (req, res) {

    res.writeHead(200, { "Content-Type": "text/html" });
    let user = ['Mohit','Manan','Mihir','Mahima','Mrinal'];
    user.map((fullname, index) => {
        res.write("<h1>"+fullname+"</h1>");
    })
    res.end();
  })
  .listen(1111);b