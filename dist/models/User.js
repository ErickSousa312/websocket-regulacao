"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema; //classe
const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    // email: {
    //     type: String,
    //     required: true,
    //     unique: true,
    //     validate: {
    //         validator: function (v) {
    //             return /\S+@\S+\.\S+/.test(v);
    //         },
    //         message: props => `${props.value} não é um e-mail válido!`
    //     }
    //   },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
});
exports.default = mongoose_1.default.model('User', userSchema);
//# sourceMappingURL=User.js.map