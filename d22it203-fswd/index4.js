const http = require('http');
const hostname = '127.0.0.1';
const port = 3003;

var fs = require('fs');
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'image/jpg');

    fs.readFile('cr7.jpg',function(err, data){

        if(err){
        console.error(err);
        }
        res.end(data);
        })

});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });