var socket  = require( 'socket.io' );
var express = require('express');
var app     = express();
var server  = require('http').createServer(app);
var io      = socket.listen( server );
// PORT THAT THE CLIENT SIDE WILL CONNECT TO FOR SOCKETS
var port    = process.env.PORT || 5000;


server.listen(port, function () {
  console.log('Server listening at port %d', port);
});


io.on('connection', function (socket) {
console.log('socket connected', socket.id);

socket.emit('hello_from_server', {message: "Hello From The Node Server", socket_id: socket.id});




});
