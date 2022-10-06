import jwt from 'jsonwebtoken';
import UserModel from '../models/UserModel';
import User from '../interfaces/userInterface';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

class ProductService {
  public model: UserModel;
    
  constructor() {
    this.model = new UserModel();
  }

  public async create(user: User) {
    const newUser = await this.model.create(user);
    return this.generateToken(newUser);
  }

  public generateToken = async (user: User) => {
    const payload = { id: user.id, username: user.username };
    const token = jwt.sign(payload, JWT_SECRET);
    return token;
  };
}

export default ProductService;