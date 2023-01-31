const { Server } = require("http");

let sayHello = function () {
  console.log("ciao a tutti");
};

let bye = function () {
  console.log("arrivederci");
};
exports.sayHello = sayHello;
exports.bye = bye;

server.listen(4000);
