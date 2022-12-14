import jwt from 'jsonwebtoken';
import LoginModel from '../models/LoginModel';
import Login from '../interfaces/loginInterface';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

class LoginService {
  public model: LoginModel;
    
  constructor() {
    this.model = new LoginModel();
  }

  public async login(user: Login) {
    const userLogin = await this.model.login(user);
    if (!userLogin) {
      return { type: 401, message: { message: 'Username or password invalid' } };
    }
    const tokenUser = await this.generateToken(userLogin);
    return { type: 200, message: { token: tokenUser } };  
  }

  public generateToken = async (user: Login) => {
    const payload = { username: user.username };
    const jwtConfig: object = {
      expiresIn: '7d', 
      algorithm: 'HS256',
    };
    const token = jwt.sign(payload, JWT_SECRET, jwtConfig);
    return token;
  };
}

export default LoginService;