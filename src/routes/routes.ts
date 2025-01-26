import express from 'express';
const router = express.Router();

import CategoryController from '../controllers/CategoryController.ts';
import AuthController from '../controllers/AuthController';
import PermissionController from '../controllers/PermissionController';
import RoleController from '../controllers/RoleController';
import JwtMiddleware from '../auth/JwtMiddleware.ts';
import CourseInfoController from '../controllers/CourseInfoController.ts';
import { broadcast } from '../websocket/event/broadcast.ts';
import { getWebSocketServer } from '../websocket/index.ts';

// Rotas para categorias (categories)
router.get('/category', CategoryController.getAll);
router.post('/category', CategoryController.create);
router.put('/category/:id', CategoryController.updateOne);
router.get('/category/:id', CategoryController.findOne);
router.delete('/category/:id', CategoryController.deleteOne);
router.get('/category_showInMenu', CategoryController.findByShowInMenu);

// Rotas para informações de cursos (courses)
router.get('/courses', CourseInfoController.getAll);
router.post('/courses', CourseInfoController.create);
router.put('/courses/:id', CourseInfoController.updateOne);
router.get('/courses/:id', CourseInfoController.findOne);
router.delete('/courses/:id', CourseInfoController.deleteOne);

// Rotas de autenticação
router.post('/signUp', AuthController.signUp);
router.post('/login', AuthController.signIn);
// router.post('/payloadToken', JwtMiddleware, AuthController.dataToken);

// Rotas para papéis e permissões
router.post('/role', RoleController.create);
router.post('/permission', PermissionController.create);
router.get('/infoUser', JwtMiddleware, AuthController.dataToken);

// Rota de teste
router.get('/', (req, res) => {
  res.json({ msg: 'ta rodando pai' });
  const wss = getWebSocketServer();
  broadcast(wss, 'teste de api');
  console.log('hi');
});

export default router;
