import jwtDecode from 'jwt-decode';
import OrderModel from '../models/OrderModel';
import Order from '../interfaces/orderInterface';
import UserModel from '../models/UserModel';
import ProductModel from '../models/ProductModel';

class OrderService {
  public model: OrderModel;

  public userModel: UserModel;

  public productModel: ProductModel;
    
  constructor() {
    this.model = new OrderModel();
    this.userModel = new UserModel();
    this.productModel = new ProductModel();
  }

  public async getAll(): Promise<Order[]> {
    const orders = await this.model.getProducts();
    return orders;
  }

  public async newOrder(token: string, productsIds: Array<number>) {
    const decode: { username: string } = jwtDecode(token as string);
    const user = await this.userModel.getUserByUsername(decode.username);
    if (user) {
      const orderId = await this.model.newOrder(user.id as number);
      productsIds.map(async (product) => this.productModel
        .updateById(product, orderId.insertId));
      return { type: 201, message: { userId: user.id, productsIds } };
    }
    return { type: 401, message: 'Invalid token' };
  }
}

export default OrderService;