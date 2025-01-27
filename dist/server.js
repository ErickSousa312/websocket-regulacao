"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoDB_1 = require("./db/mongoDB");
const Loaders_1 = __importDefault(require("./db/Loaders"));
const dbStarters = {
    mongoDB: mongoDB_1.startDB,
};
const loaders = new Loaders_1.default(dbStarters);
loaders.start();
//# sourceMappingURL=server.js.map