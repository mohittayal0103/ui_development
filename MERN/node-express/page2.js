const http = require("http");

http
  .createServer(function (req, res) {

    res.writeHead(200, { "Content-Type": "text/json" });
    let user = ['Alex','Mohit','Manan','Mihir','Mahima','Mrinal'];
    let jsondata = JSON.stringify(user);   //converting  array -> json
    res.write(jsondata);
    res.end();
  })
  .listen(1111);