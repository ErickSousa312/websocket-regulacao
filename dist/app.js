"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes/routes"));
const bodyParser = 'bodyParser';
const http_1 = __importDefault(require("http"));
const index_1 = require("./websocket/index");
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ limit: '90mb', extended: true }));
app.use((0, cors_1.default)());
app.use(express_1.default.json({ limit: '90mb' }));
app.use(routes_1.default);
const server = http_1.default.createServer(app);
(0, index_1.initializeWebSocket)(server);
server.listen(process.env.WEBSOCKET_PORT);
exports.default = app;
//# sourceMappingURL=app.js.map