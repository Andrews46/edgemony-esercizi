const http = require("http");
const os = require("os");

let utente = os.userInfo();
let piattaforma = os.platform();
let data = new Date();

let messaggio = `<!doctype html><html><head>
</head>
<body>
l'utente <b>${utente.username}</b> ha avviatol'app il giorno
<>${data.getDate()}/${data.getMonth()}/${data.getFullYear()}</b>usando la piattaforma: ${piattaforma}
</body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.url === "/") res.end(messaggio);
});

server.listen(3001);
