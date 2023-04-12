import { connect } from "../config/cryptomonedas.db.config";
import { CryptoPojo } from "../models/cryptomonedas.models";

export class CryptoRepository {
  _database: any = {};
  _cryptoRepository: any;

  constructor() {
    this._database = connect();
    this._cryptoRepository = this._database.sequelize.getRepository(CryptoPojo);
  }

  async getAllUsers(): Promise<CryptoPojo[]> {
    try {
      return await this._cryptoRepository.findAll();
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}
