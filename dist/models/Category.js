"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const CategorySchema = new Schema({
    nameCategory: {
        type: String,
        required: true,
    },
    descriptionCategory: {
        type: String,
        required: true,
    },
    showInMenu: {
        type: Boolean,
        default: false,
        required: true,
    },
    imgCategory: {
        type: String,
        // auto: true,
        required: true,
    },
});
exports.default = mongoose_1.default.model('Category', CategorySchema);
//# sourceMappingURL=Category.js.map