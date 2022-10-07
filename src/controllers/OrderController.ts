import { Request, Response } from 'express';
import OrderService from '../services/OrderService';

class OrderController {
  constructor(private service = new OrderService()) { }

  public getAll = async (req: Request, res: Response) => {
    const orders = await this.service.getAll();
    res.status(200).json(orders);
  };

  public newOrder = async (req: Request, res: Response) => {
    const token = req.headers.authorization;
    const { productsIds } = req.body;
    const newProduct = await this.service.newOrder(token as string, productsIds as Array<number>);
    res.status(newProduct.type).json(newProduct.message);
  };
}

export default OrderController;