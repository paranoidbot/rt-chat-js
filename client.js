const socket = io('127.0.0.1:3000');

socket.on('chat-message', data => {
  console.log(data);
})
