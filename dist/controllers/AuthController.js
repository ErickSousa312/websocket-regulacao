"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// import getRoleById from '../utils/GetRoleByID';
class AuthController {
    signUp(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userName, password, role } = req.body;
            console.log(userName, password, role);
            try {
                const existingUser = yield User_1.default.findOne({ userName });
                if (existingUser) {
                    return res.status(409).json({ error: 'O usuário já existe' });
                }
                const hashedPassword = yield bcrypt_1.default.hash(password, 10);
                console.log(hashedPassword);
                const newUser = yield User_1.default.create({
                    userName,
                    password: hashedPassword,
                    role,
                });
                if (!newUser) {
                    return res.status(400).json({ msg: 'Erro ao registrar Usuario' });
                }
                res.status(201).json({ msg: 'Usuário registrado com sucesso' });
            }
            catch (error) {
                res.status(400).json({
                    msg: 'Erro ao cadastrar Usuario',
                    err: error.message,
                });
            }
        });
    }
    signIn(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userName, password } = req.body;
            console.log(req.body);
            try {
                const response = yield User_1.default.findOne({
                    userName: userName,
                });
                if (!response) {
                    return res.status(401).json({ error: 'Credenciais inválidas' });
                }
                const isPasswordValid = yield bcrypt_1.default.compare(password, response.password);
                if (!isPasswordValid) {
                    return res.status(401).json({ msg: 'Credenciais inválidas' });
                }
                if (process.env.SECRET === undefined) {
                    return res
                        .status(500)
                        .json({ msg: 'Variável de ambiente Secret não definida' });
                }
                const token = jsonwebtoken_1.default.sign({
                    userId: response._id,
                    userName: response.userName,
                    role: response.role,
                }, process.env.SECRET);
                return res.status(201).json({
                    userName: response.userName,
                    access_token: token,
                });
            }
            catch (error) {
                res.status(500).json({ msg: 'Erro interno do servidor', err: error });
            }
        });
    }
    dataToken(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            if (!((_a = req.userData) === null || _a === void 0 ? void 0 : _a.role)) {
                return res.status(422).json({ msg: 'Role is undefined' });
            }
            return res.status(200).json({
                _id: req.userData._id,
                userName: req.userData.userName,
                role: req.userData.role,
            });
        });
    }
}
exports.default = new AuthController();
//# sourceMappingURL=AuthController.js.map