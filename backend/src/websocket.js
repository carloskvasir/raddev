import socketio from 'socket.io';

function setupWebsocket(server) {
  const io = socketio(server);

  io.on('connection', socket => {
    console.log(socket.id);
    console.log(socket.handshake.query);

    setTimeout(() => {
      socket.emit('message', 'Hello OmniStack');
    }, 3000);
  });
}

export default setupWebsocket;
