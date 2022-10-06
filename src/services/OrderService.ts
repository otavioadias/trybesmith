import OrderModel from '../models/OrderModel';
import Order from '../interfaces/orderInterface';

class OrderService {
  public model: OrderModel;
    
  constructor() {
    this.model = new OrderModel();
  }

  public async getAll(): Promise<Order[]> {
    const orders = await this.model.getProducts();
    return orders;
  }
}

export default OrderService;