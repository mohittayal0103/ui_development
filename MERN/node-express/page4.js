const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/json" });

    let allbook = [
        {name:"html", price:3000, seller:"Uttu"},
        {name:"CSS", price:4000, seller:"Mohit"},
        {name:"React", price:5000, seller:"Mihir"},
        {name:"NodeJS", price:6000, seller:"Mrinal"},
        {name:"MongoDB", price:7000, seller:"Manan"}
    ]

    let jsonData = JSON.stringify(allbook);

    res.write(jsonData);

    res.end();
  })
  .listen(1234);
