"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function JwtMiddleware(req, res, next) {
    const headerToken = req.headers.authorization;
    if (!headerToken) {
        return res.status(401).send({ error: 'Token não informado' });
    }
    const [typeToken, token] = headerToken.split(' ');
    if (process.env.SECRET === undefined) {
        return res
            .status(500)
            .json({ msg: 'Variável de ambiente Secret não definida' });
    }
    jsonwebtoken_1.default.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ msg: 'Token Inválido', error: err });
        }
        req.userData = decoded;
        next();
    });
}
exports.default = JwtMiddleware;
//# sourceMappingURL=JwtMiddleware.js.map