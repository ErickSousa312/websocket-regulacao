"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.broadcast = broadcast;
exports.broadcastAttPasswords = broadcastAttPasswords;
const passwordManager_1 = require("../manager/passwordManager");
function broadcast(wss, message) {
    wss.clients.forEach((client) => {
        if (client.readyState === 1) {
            client.send(message);
        }
    });
}
function broadcastAttPasswords(wss) {
    const allpasswords = passwordManager_1.passwordManager.getAllPasswords();
    console.log(passwordManager_1.passwordManager.getAllPasswordsGenerated());
    wss.clients.forEach((client) => {
        if (client.readyState === 1) {
            client.send(JSON.stringify({
                type: 'broadcast',
                data: allpasswords,
                currentPassword: passwordManager_1.passwordManager.getLastCalledPassword(),
                allPasswordGenerated: passwordManager_1.passwordManager.getAllPasswordsGenerated(),
            }));
        }
    });
}
//# sourceMappingURL=broadcast.js.map