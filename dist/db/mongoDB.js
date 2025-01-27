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
exports.startDB = startDB;
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("../app"));
dotenv_1.default.config();
mongoose_1.default.set('strictQuery', true);
// const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.aglfnms.mongodb.net/db_bot?retryWrites=true&w=majority&appName=Cluster0`;
const url = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.ADDRESS_DATA_BASE}:${process.env.PORT_URL}/db_passwords?authSource=admin`;
function startDB() {
    return __awaiter(this, void 0, void 0, function* () {
        mongoose_1.default.set('strictQuery', true);
        try {
            yield mongoose_1.default.connect(url);
            console.log('Conectado ao MongoDB!');
            app_1.default.listen(process.env.PORT);
        }
        catch (error) {
            console.log(error);
        }
    });
}
//# sourceMappingURL=mongoDB.js.map