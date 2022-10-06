import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/userInterface';
import connection from './connection';

export default class UserModel {
  public connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async create(user: User): Promise<User> {
    const { username, classe, level, password } = user;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    const [dataInsertId] = result;
    const { insertId } = dataInsertId;
    return { id: insertId, ...user };
  }
}