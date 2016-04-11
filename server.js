var ioSocket = require('socket.io').listen(3000);
var usuariosOnLine = [];

ioSocket.sockets.on("connection", iniciar);

function iniciar(socket){
	socket.on("datos_cliente", devolverDatos);
	socket.on("nickname", cargarUsuarios);
}

function cargarUsuarios(user){
	usuariosOnLine.push(user);
	ioSocket.sockets.emit("listaUser", usuariosOnLine);
}

function devolverDatos(data){
	ioSocket.sockets.emit("datos_servidor", data);
}