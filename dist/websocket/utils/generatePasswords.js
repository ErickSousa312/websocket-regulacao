"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPassword = getPassword;
function getPassword() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const passwordArray = Array(4).fill(null);
    const numberPositions = new Set();
    while (numberPositions.size < 3) {
        numberPositions.add(Math.floor(Math.random() * 4));
    }
    numberPositions.forEach((pos) => {
        passwordArray[pos] = numbers[Math.floor(Math.random() * numbers.length)];
    });
    passwordArray.forEach((val, index) => {
        if (val === null) {
            passwordArray[index] = chars[Math.floor(Math.random() * chars.length)];
        }
    });
    return passwordArray.join('');
}
//# sourceMappingURL=generatePasswords.js.map