import { Router } from 'express';
import LoginController from '../controllers/LoginController';

const loginController = new LoginController();

const router = Router();

router.post('/', loginController.login);

export default router;