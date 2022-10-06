import express from 'express';
import errorMiddleware from './middlewares/errormiddleware';
import productRoute from './routes/productRoute';
import userRoute from './routes/userRoute';
import 'express-async-errors';

const app = express();

app.use(express.json());

app.use('/products', productRoute);
app.use('/users', userRoute);

app.use(errorMiddleware);

export default app;