import ProductModel from '../models/ProductModel';
import Product from '../interfaces/productInterface';

class ProductService {
  public model: ProductModel;
    
  constructor() {
    this.model = new ProductModel();
  }

  public create(product: Product): Promise<Product> {
    return this.model.create(product);
  }
}

export default ProductService;