import { Router } from 'express';
import LoginController from '../controllers/LoginController';

const loginController = new LoginController();

const router = Router();

router.get('/', loginController.login);

export default router;