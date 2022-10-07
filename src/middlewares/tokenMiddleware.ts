import { NextFunction, Request, Response } from 'express';
import jwtDecode from 'jwt-decode';

const tokenMiddleware = ((req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;
    if (!token) { res.status(401).json({ message: 'Token not found' }); }
    const decode: { username: string } = jwtDecode(token as string);
    console.log(decode);
    next();
  } catch (e) { 
    return res.status(401).json({ message: 'Invalid token' });
  }
});

export default tokenMiddleware;