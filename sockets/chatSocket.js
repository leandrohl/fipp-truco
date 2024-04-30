import { Server } from 'socket.io'
import ChatContoller from '../controllers/chatController.js';

export default function socketInit(io) {
    let chatController = new ChatContoller();
    io.on('connection', (socket) => {
      let codSala = socket.handshake.query.codSala;
      let nome = socket.handshake.query.nome;
      socket.join(codSala);
      io.to(codSala).emit('entrar', {participante: nome});
      socket.on('disconnect', () => {          
          chatController.remover(nome, codSala);
          io.to(codSala).emit('sair', {saiu: true, qtde: socket.rooms.size, participante: nome});
        });
  
      socket.on('enviarMensagem', (msg) => {
        io.to(msg.codSala).emit('enviarMensagem', msg);
      });

      socket.on('sair', (msg) => {
        io.to(msg.codSala).emit('sair', msg);
      });

    });
}