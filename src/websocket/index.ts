import WebSocket, { WebSocketServer } from 'ws';
import { handleConnection } from './event/connection';
import WEBSOCKET_PORT from './config/websocket';
import http from 'http';

export function initializeWebSocket(server: http.Server): void {
  const wss: WebSocketServer = new WebSocketServer({ server });

  console.log(`WebSocket rodando na porta ${WEBSOCKET_PORT}`);

  wss.on('connection', (ws: WebSocket) => handleConnection(ws, wss));
}
