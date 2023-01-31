const http = require("http");

let server = http.createServer(function (req, res) {
  //200 indica il successo della richiesta / risposta
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(
    "<!DOCTYPE html>" +
      "<html>" +
      "<head>" +
      "<title>" +
      "Home page" +
      "</title>" +
      "</head>" +
      "<body>" +
      "<h1>La mia app</h1>" +
      "</body>" +
      "</html>"
  );

  res.end();
});

server.listen(8080);
