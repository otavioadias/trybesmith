import { Pool } from 'mysql2/promise';
import Order from '../interfaces/orderInterface';
import connection from './connection';

export default class OrderModel {
  public connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async getProducts(): Promise<Order[]> {
    const result = await this.connection.execute(
      `SELECT orderId as id,
      userId as userId,
      JSON_ARRAYAGG(p.id) as productsIds
      FROM Trybesmith.Orders as o
      INNER JOIN Trybesmith.Products as p ON p.orderId = o.id
      GROUP BY orderId;`,
    );
    const [rows] = result;
    return rows as Order[];
  }
}