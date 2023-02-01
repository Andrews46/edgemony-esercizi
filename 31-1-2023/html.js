const http = require("http");
const fs = require("fs");

//modulo file system
const homePage = fs.readFileSync("index.html");
const prodotti = fs.readFileSync("index1.html");
const cliente = fs.readFileSync("index2.html");
let server = http.createServer((req, res) => {
  if (req.url === "/chi-siamo") res.end("pagina chi siamo");
  else if (req.url === "/contatti") res.end("pagina contatti");
  else if (req.url === "/") res.end(homePage);
  else if (req.url === "/index1") res.end(prodotti);
  else if (req.url === "/index2") res.end(cliente);
  else {
    res.writeHead(404);
    res.end("Sorry, not found");
  }
});
server.listen(3001);
