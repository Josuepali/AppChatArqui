var ioSocket = require('socket.io').listen(3000);

ioSocket.sockets.on("connection", iniciar);

function iniciar(socket){
	socket.on("datos_cliente", devolverDatos);
}

function devolverDatos(data){
	ioSocket.sockets.emit("datos_servidor", data);
}