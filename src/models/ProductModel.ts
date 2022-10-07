import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import Product from '../interfaces/productInterface';
import connection from './connection';

export default class ProductModel {
  public connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async create(product: Product): Promise<Product> {
    const { name, amount } = product;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const [dataInsertId] = result;
    const { insertId } = dataInsertId;
    return { id: insertId, ...product };
  }

  public async getProducts(): Promise<Product[]> {
    const result = await this.connection.execute(
      'SELECT * FROM Trybesmith.Products',
    );
    const [rows] = result;
    return rows as Product[];
  }

  public async updateById(id: number, orderId: number): Promise<Product> {
    const [[result]] = await this.connection.execute<Product & RowDataPacket[]>(
      'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?',
      [orderId, id],
    );
    return result as Product;
  }
}