import { CryptoIntermedioDto } from "./../../controllers/types";
import { connect } from "../config/cryptointermedio.db.config";
import { CryptoIntermedioPojo } from "../models/cryptointermedio.models";

export class CryptoIntermedioRepository {
  _database: any = {};
  _cryptoIntermedioRepository: any;

  constructor() {
    this._database = connect();
    this._cryptoIntermedioRepository =
      this._database.sequelize.getRepository(CryptoIntermedioPojo);
  }

  async getAmountByUserId(userId: string): Promise<CryptoIntermedioPojo[]> {
    console.log(userId);
    try {
      return await this._cryptoIntermedioRepository.findAll({
        where: {
          userId: userId,
        },
      });
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  async addCrypto(crypto: CryptoIntermedioDto): Promise<CryptoIntermedioPojo> {
    console.log(crypto);
    try {
      return await this._cryptoIntermedioRepository.findOne({
        where: {
          user_id: crypto.user_id,
          crypto_id: crypto.crypto_id,
        },
      });
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
