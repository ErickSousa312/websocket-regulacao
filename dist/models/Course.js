"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const CourseInfoSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    weekdays: {
        type: [String],
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    schedule: {
        type: String,
        required: true,
    },
    includesInternship: {
        type: Boolean,
        default: false,
    },
    includesMaterial: {
        type: Boolean,
        default: false,
    },
});
exports.default = mongoose_1.default.model('CourseInfo', CourseInfoSchema);
//# sourceMappingURL=Course.js.map