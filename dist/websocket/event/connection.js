"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleConnection = handleConnection;
const handler_1 = require("./handler");
const broadcast_1 = require("./broadcast");
function handleConnection(ws, wss) {
    console.log('Novo cliente conectado.');
    (0, broadcast_1.broadcastAttPasswords)(wss);
    ws.on('message', (message) => {
        const data = JSON.parse(message);
        const handler = handler_1.handleMessage[data.type];
        if (handler) {
            handler(data, ws, wss);
        }
        else {
            console.log('Tipo de mensagem desconhecido:', data.type);
        }
    });
    ws.on('close', () => {
        console.log('Cliente desconectado.');
        (0, broadcast_1.broadcast)(wss, 'Um cliente foi desconectado.');
    });
}
//# sourceMappingURL=connection.js.map