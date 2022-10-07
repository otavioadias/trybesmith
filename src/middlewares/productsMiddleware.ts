import { NextFunction, Request, Response } from 'express';
import schemas from './schemas';

const productsMiddleware = ((req: Request, res: Response, next: NextFunction) => {
  const products = req.body;
  const validation = schemas.productsSchema.validate(products);
  if (validation.error) {
    return res.status(
      validation.error.details[0].type === 'any.required'
        ? 400 : 422,
    ).json({ message: validation.error.message });
  }
  next();
});

export default productsMiddleware;