import { NextFunction, Request, Response } from 'express';
import schemas from './schemas';

const productsMiddleware = ((req: Request, res: Response, next: NextFunction) => {
  const user = req.body;
  const validation = schemas.userSchema.validate(user);
  if (validation.error) {
    return res.status(
      validation.error.details[0].type === 'any.required'
        ? 400 : 422,
    ).json({ message: validation.error.message });
  }
  next();
});

export default productsMiddleware;