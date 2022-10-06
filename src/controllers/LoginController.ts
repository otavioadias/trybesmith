import { Request, Response } from 'express';
import LoginService from '../services/LoginService';

class LoginController {
  constructor(private service = new LoginService()) { }

  public login = async (req: Request, res: Response) => {
    const user = req.body;
    const token = await this.service.login(user);
    return res.status(token.type).json(token.message);
  };
}

export default LoginController;