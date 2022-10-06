import { Request, Response } from 'express';
import UserService from '../services/UserService';

class UserController {
  constructor(private service = new UserService()) { }

  public newUser = async (req: Request, res: Response) => {
    const user = req.body;
    const token = await this.service.create(user);
    return res.status(201).json({ token });
  };
}

export default UserController;