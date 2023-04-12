import { UserPojo } from "../models/use.models";
import { connect } from "../config/user.db.config";

export class UserRepository {
  _database: any = {};
  _userRepository: any;

  constructor() {
    this._database = connect();
    this._userRepository = this._database.sequelize.getRepository(UserPojo);
  }
  async addUser(newUser: UserPojo): Promise<number> {
    try {
      newUser = await this._userRepository.create(newUser);
      return newUser.id;
    } catch (error) {
      console.error(error);
      return -1;
    }
  }

  async getUserById(id: number): Promise<UserPojo | undefined> {
    try {
      return await this._userRepository.findByPk(id);
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }
  async getAllUsers(): Promise<UserPojo[]> {
    try {
      return await this._userRepository.findAll();
    } catch (error) {
      console.error(error);
      return [];
    }
  }
  async getUserByUserName(userName): Promise<UserPojo> {
    try {
      return await this._userRepository.findOne(userName);
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }
}
