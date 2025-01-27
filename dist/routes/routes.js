"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const CategoryController_1 = __importDefault(require("../controllers/CategoryController"));
const AuthController_1 = __importDefault(require("../controllers/AuthController"));
const PermissionController_1 = __importDefault(require("../controllers/PermissionController"));
const RoleController_1 = __importDefault(require("../controllers/RoleController"));
const JwtMiddleware_1 = __importDefault(require("../auth/JwtMiddleware"));
const CourseInfoController_1 = __importDefault(require("../controllers/CourseInfoController"));
const broadcast_1 = require("../websocket/event/broadcast");
const index_1 = require("../websocket/index");
// Rotas para categorias (categories)
router.get('/category', CategoryController_1.default.getAll);
router.post('/category', CategoryController_1.default.create);
router.put('/category/:id', CategoryController_1.default.updateOne);
router.get('/category/:id', CategoryController_1.default.findOne);
router.delete('/category/:id', CategoryController_1.default.deleteOne);
router.get('/category_showInMenu', CategoryController_1.default.findByShowInMenu);
// Rotas para informações de cursos (courses)
router.get('/courses', CourseInfoController_1.default.getAll);
router.post('/courses', CourseInfoController_1.default.create);
router.put('/courses/:id', CourseInfoController_1.default.updateOne);
router.get('/courses/:id', CourseInfoController_1.default.findOne);
router.delete('/courses/:id', CourseInfoController_1.default.deleteOne);
// Rotas de autenticação
router.post('/signUp', AuthController_1.default.signUp);
router.post('/login', AuthController_1.default.signIn);
// router.post('/payloadToken', JwtMiddleware, AuthController.dataToken);
// Rotas para papéis e permissões
router.post('/role', RoleController_1.default.create);
router.post('/permission', PermissionController_1.default.create);
router.get('/infoUser', JwtMiddleware_1.default, AuthController_1.default.dataToken);
// Rota de teste
router.get('/', (req, res) => {
    res.json({ msg: 'ta rodando pai' });
    const wss = (0, index_1.getWebSocketServer)();
    (0, broadcast_1.broadcast)(wss, 'teste de api');
    console.log('hi');
});
exports.default = router;
//# sourceMappingURL=routes.js.map