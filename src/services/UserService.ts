import UserModel from '../models/UserModel';
import User from '../interfaces/userInterface';

class ProductService {
  public model: UserModel;
    
  constructor() {
    this.model = new UserModel();
  }

  public create(user: User): Promise<User> {
    return this.model.create(user);
  }
}

export default ProductService;