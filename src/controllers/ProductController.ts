import { Request, Response } from 'express';
import ProductService from '../services/ProductService';

class ProductController {
  constructor(private service = new ProductService()) { }

  public newProduct = async (req: Request, res: Response) => {
    const product = req.body;
    const newProduct = await this.service.create(product);
    res.status(201).json(newProduct);
  };
}

export default ProductController;