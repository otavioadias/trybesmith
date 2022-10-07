import { Router } from 'express';
import ProductController from '../controllers/ProductController';
import productsMiddleware from '../middlewares/productsMiddleware';

const productController = new ProductController();

const router = Router();

router.post('/', productsMiddleware, productController.newProduct);
router.get('/', productController.getAll);

export default router;