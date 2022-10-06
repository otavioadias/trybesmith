import { Pool, RowDataPacket } from 'mysql2/promise';
import Login from '../interfaces/loginInterface';
import connection from './connection';

export default class UserModel {
  public connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async login(user: Login):Promise<Login> {
    const { username, password } = user;
    const [[userLogin]] = await this.connection.execute<Login & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?',
      [username, password],
    );
    return userLogin as Login;
  }
}