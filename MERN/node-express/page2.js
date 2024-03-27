let http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    // Acknowledgement to the client.
    // it informs the client that everything is fine server is ready to dispatch the response in text nd html format.

    let booklist = [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "NodeJS",
      "MongoDB",
      "express",
    ];

    res.write("<h1>Welcome to NodeJS </h1>");
    booklist.map((book, index) => {
      res.write("<p>" + book + "</p>");
    });

    res.end();
    // end of response - client nothing left for you
  })
  .listen(1234);
