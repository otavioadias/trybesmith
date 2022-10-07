import { Router } from 'express';
import UserController from '../controllers/UserController';
import userMiddleware from '../middlewares/userMiddleware';

const userController = new UserController();

const router = Router();

router.post('/', userMiddleware, userController.newUser);

export default router;