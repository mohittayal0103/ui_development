const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/json" });

    let allbook = [
        {name:"html", price:3000, seller:"Uttu", city:['bangalore','pune']},
        {name:"CSS", price:4000, seller:"Mohit", city:['chennai','hyderabad','bangalore']},
        {name:"React", price:5000, seller:"Mihir", city:['delhi']},
        {name:"NodeJS", price:6000, seller:"Mrinal", city:['mumbai']},
        {name:"MongoDB", price:7000, seller:"Manan", city:[]}
    ]

    let jsonData = JSON.stringify(allbook);

    res.write(jsonData);

    res.end();
  })
  .listen(1234);
