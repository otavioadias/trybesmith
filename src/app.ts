import express from 'express';
import errorMiddleware from './middlewares/errormiddleware';
import productRoute from './routes/productRoute';
import userRoute from './routes/userRoute';
import orderRoute from './routes/orderRoute';
import loginRoute from './routes/loginRoute';
import 'express-async-errors';
import loginMiddleware from './middlewares/loginMiddleware';

const app = express();

app.use(express.json());

app.use('/products', productRoute);
app.use('/users', userRoute);
app.use('/orders', orderRoute);
app.use('/login', loginMiddleware, loginRoute);

app.use(errorMiddleware);

export default app;