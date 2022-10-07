import { NextFunction, Request, Response } from 'express';
import schemas from './schemas';

const ordersMiddleware = ((req: Request, res: Response, next: NextFunction) => {
  const productsIds = req.body;
  const validation = schemas.orderSchema.validate(productsIds);
  if (validation.error) {
    if (validation.error.details[0].type === 'array.min') {
      return res.status(422).json({ message: '"productsIds" must include only numbers' });
    }
    return res.status(
      validation.error.details[0].type === 'any.required'
        ? 400 : 422,
    ).json({ message: validation.error.message });
  }
  next();
});

export default ordersMiddleware;