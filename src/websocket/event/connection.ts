import { WebSocket, WebSocketServer } from 'ws';
import { handleMessage } from './handler';
import { broadcast } from './broadcast';

function handleConnection(ws: WebSocket, wss: WebSocketServer): void {
  console.log('Novo cliente conectado.');

  ws.on('message', (message: string) => handleMessage(ws, message, wss));

  ws.on('close', () => {
    console.log('Cliente desconectado.');
    broadcast(wss, 'Um cliente foi desconectado.');
  });
}

export { handleConnection };
