import WebSocket, { WebSocketServer } from 'ws';
import { handleConnection } from './event/connection';
import http from 'http';

// Variável para armazenar a instância do WebSocketServer
let wss: WebSocketServer | undefined;

export function initializeWebSocket(server: http.Server): void {
  // Inicializa o WebSocketServer com o servidor HTTP
  wss = new WebSocketServer({ server });

  console.log(`WebSocket rodando na porta ${process.env.WEBSOCKET_PORT}`);

  wss.on('connection', (ws: WebSocket) => {
    console.log('Novo cliente conectado ao WebSocket');
    handleConnection(ws, wss!);
  });
}

export function getWebSocketServer(): WebSocketServer {
  if (!wss) {
    throw new Error('O WebSocket ainda não foi inicializado.');
  }
  return wss;
}
