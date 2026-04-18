const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.createReadStream(path.join(__dirname, "index.html")).pipe(res);
});

server.listen(8080, () => console.log("Running on port 8080. I hope."));
