"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordManager = void 0;
const generatePasswords_1 = require("../utils/generatePasswords");
class PasswordManager {
    constructor() {
        this.passwords = [];
        this.passwordsGenerate = [];
        this.lastPasswordId = 0;
    }
    generatePasswordSolo() {
        const getPasswordSolo = (0, generatePasswords_1.getPassword)();
        const newPassword = {
            id: `${getPasswordSolo}`,
            called: false,
        };
        this.passwordsGenerate.push(newPassword);
        return newPassword;
    }
    generatePasswordGuiche(guiche) {
        this.lastPasswordId += 1;
        const newPassword = {
            id: `${this.lastPasswordId}`,
            guiche,
            called: false,
        };
        this.passwords.unshift(newPassword);
        return newPassword;
    }
    callNextPassword(guiche) {
        const nextPassword = this.passwordsGenerate.find((password) => !password.called);
        this.passwordsGenerate = this.passwordsGenerate.map((password) => {
            if (password.id === (nextPassword === null || nextPassword === void 0 ? void 0 : nextPassword.id)) {
                return Object.assign(Object.assign({}, password), { called: true });
            }
            return password;
        });
        console.log(this.passwordsGenerate);
        if (!nextPassword) {
            return null;
        }
        const passwordWithGuiche = {
            id: nextPassword === null || nextPassword === void 0 ? void 0 : nextPassword.id,
            guiche,
            called: true,
        };
        this.passwords.push(passwordWithGuiche);
        return passwordWithGuiche;
    }
    getAllPasswords() {
        return this.passwords.slice().reverse();
    }
    getAllPasswordsGenerated() {
        return this.passwordsGenerate;
    }
    excludeAllPasswords() {
        this.passwordsGenerate = [];
    }
    excludeAllData() {
        this.passwordsGenerate = [];
        this.passwords = [];
    }
    getCalledPasswords() {
        return this.passwords.filter((password) => password.called);
    }
    getLastCalledPassword() {
        return this.passwords
            .slice()
            .reverse()
            .find((password) => password.called);
    }
}
exports.passwordManager = new PasswordManager();
//# sourceMappingURL=passwordManager.js.map