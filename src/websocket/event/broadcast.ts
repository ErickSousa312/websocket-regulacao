import { WebSocket, WebSocketServer } from 'ws';

export function broadcast(wss: WebSocketServer, message: string) {
  wss.clients.forEach((client) => {
    if (client.readyState === 1) {
      client.send(message);
    }
  });
}
