"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeWebSocket = initializeWebSocket;
exports.getWebSocketServer = getWebSocketServer;
const ws_1 = require("ws");
const connection_1 = require("./event/connection");
// Variável para armazenar a instância do WebSocketServer
let wss;
function initializeWebSocket(server) {
    // Inicializa o WebSocketServer com o servidor HTTP
    wss = new ws_1.WebSocketServer({ server });
    console.log(`WebSocket rodando na porta ${process.env.WEBSOCKET_PORT}`);
    wss.on('connection', (ws) => {
        console.log('Novo cliente conectado ao WebSocket');
        (0, connection_1.handleConnection)(ws, wss);
    });
}
function getWebSocketServer() {
    if (!wss) {
        throw new Error('O WebSocket ainda não foi inicializado.');
    }
    return wss;
}
//# sourceMappingURL=index.js.map