"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const PasswordsSchema = new Schema({
    number: {
        type: Number,
        required: true,
        unique: true, // Cada senha deve ser única
    },
    guichet: {
        type: String,
        required: false, // Pode ser preenchido ao chamar a senha
    },
    status: {
        type: String,
        enum: ['waiting', 'called'], // Estado da senha
        default: 'waiting',
    },
    createdAt: {
        type: Date,
        default: Date.now, // Data e hora de criação
    },
});
exports.default = mongoose_1.default.model('Passwords', PasswordsSchema);
//# sourceMappingURL=passwords.js.map