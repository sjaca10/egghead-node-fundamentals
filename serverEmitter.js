var http = require('http');

var server = http.createServer();

server.on('request', function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('This is our response');
});

server.listen(3000);
console.log('Server running at http://127.0.0.1:3000/');