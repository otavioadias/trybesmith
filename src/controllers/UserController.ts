import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../interfaces/userInterface';
import UserService from '../services/UserService';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

class UserController {
  constructor(private service = new UserService()) { }

  public newUser = async (req: Request, res: Response) => {
    const user = req.body;
    const newUser = await this.service.create(user);
    const token = await this.generateToken(newUser);
    return res.status(201).json({ token });
  };

  public generateToken = async (user: User) => {
    const payload = { id: user.id, username: user.username };
    const token = jwt.sign(payload, JWT_SECRET);
    return token;
  };
}

export default UserController;