const http = require("http");

const port = 8000;

const server = http.createServer((req, res) => {
    switch (req.url) {
        case "/":
            res.statusCode = 200;
            res.end();
            break;
    
        default:
            res.statusCode = 404;
            res.end("Error 404 : Not Found")
            break;
    }

});


  server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
  });


  server.listen(port);
