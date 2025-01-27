"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleMessage = void 0;
const broadcast_1 = require("./broadcast");
const passwordManager_1 = require("../manager/passwordManager");
exports.handleMessage = {
    generatePassword: (payload, ws, wss) => {
        console.log('Gerando senha');
        const newPassword = passwordManager_1.passwordManager.generatePasswordSolo();
        console.log(newPassword);
        (0, broadcast_1.broadcastAttPasswords)(wss);
    },
    callNextPassword: (payload, ws, wss) => {
        console.log('Chamando próxima senha');
        passwordManager_1.passwordManager.callNextPassword(payload.guiche);
        (0, broadcast_1.broadcastAttPasswords)(wss);
    },
    excludeAllPasswords: (payload, ws, wss) => {
        console.log('Chamando próxima senha');
        passwordManager_1.passwordManager.excludeAllPasswords();
        (0, broadcast_1.broadcastAttPasswords)(wss);
    },
    excludeAllData: (payload, ws, wss) => {
        console.log('Chamando próxima senha');
        passwordManager_1.passwordManager.excludeAllData();
        (0, broadcast_1.broadcastAttPasswords)(wss);
    },
    ping: (_, ws, wss) => {
        ws.send(JSON.stringify({ type: 'pong' }));
    },
};
//# sourceMappingURL=handler.js.map