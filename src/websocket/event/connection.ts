import { WebSocket, WebSocketServer } from 'ws';
import { handleMessage } from './handler';
import { broadcast, broadcastAttPasswords } from './broadcast';
import { passwordManager } from '../manager/passwordManager';

function handleConnection(ws: WebSocket, wss: WebSocketServer): void {
  console.log('Novo cliente conectado.');

  broadcastAttPasswords(wss);

  ws.on('message', (message: string) => {
    const data = JSON.parse(message);
    const handler = handleMessage[data.type];

    if (handler) {
      handler(data, ws, wss);
    } else {
      console.log('Tipo de mensagem desconhecido:', data.type);
    }
  });

  ws.on('close', () => {
    console.log('Cliente desconectado.');
    broadcast(wss, 'Um cliente foi desconectado.');
  });
}

export { handleConnection };
