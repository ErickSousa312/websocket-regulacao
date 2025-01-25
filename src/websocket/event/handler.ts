import { broadcast } from './broadcast';
import { WebSocket, WebSocketServer } from 'ws';

export function handleMessage(
  ws: WebSocket,
  message: string,
  wss: WebSocketServer,
) {
  console.log('Mensagem recebida:', message);

  broadcast(wss, `Mensagem de um cliente: ${message}`);
}
