import { Router } from 'express';
import OrderController from '../controllers/OrderController';
import ordersMiddleware from '../middlewares/ordersMiddleware';
import tokenMiddleware from '../middlewares/tokenMiddleware';

const orderController = new OrderController();

const router = Router();

router.get('/', orderController.getAll);
router.post('/', tokenMiddleware, ordersMiddleware, orderController.newOrder);

export default router;