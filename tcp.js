var net = require('net');

var server = net.createServer(function(c) {
    console.log('Client connected');

    c.on('data', function(d) {
        console.log('Data received: ' + d.toString());
    });

    c.on('end', function() {
        console.log('Client disconnected');
    });
});

server.listen(3000, function() {
    console.log('Server started')
});