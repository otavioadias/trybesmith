import express from 'express';
import errorMiddleware from './middlewares/errormiddleware';
import productRoute from './routes/productRoute';
import 'express-async-errors';

const app = express();

app.use(express.json());

app.use('/products', productRoute);

app.use(errorMiddleware);

export default app;