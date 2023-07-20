const http = require('http');
var raj = require("fs");

const hostname = '127.0.0.1';
const port = 3005;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  //res.setHeader('Content-Type', 'image/jpg');
  //var img = raj.readFileSync('cr7.jpg');
  res.writeHead(200,{'Content-type':'image/jpg'});
  raj.createReadStream('cr7.jpg').pipe(res);
  //res.end(img,'binary');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});