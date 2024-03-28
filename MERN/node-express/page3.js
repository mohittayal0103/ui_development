let http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/json" });

    let booklist = [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "NodeJS",
      "MongoDB",
      "express",
    ];

    let jsonData = JSON.stringify(booklist); //converting array to json

    res.write(jsonData);

    res.end();

  })
  .listen(1111);
