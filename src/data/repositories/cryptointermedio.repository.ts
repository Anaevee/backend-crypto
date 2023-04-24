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
          userId: crypto.user_id,
          crypto_id: crypto.crypto_id,
        },
      });
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  async updateCryptoUser(cryptoUser: CryptoIntermedioPojo): Promise<string> {
    const data = await this._cryptoIntermedioRepository.findOne({
      where: {
        user_id: cryptoUser.user_id,
        crypto_id: cryptoUser.crypto_id,
      },
    });
    if (!!data) {
      this._cryptoIntermedioRepository.update(
        { amount: cryptoUser.amount },
        {
          where: {
            user_id: cryptoUser.user_id,
            crypto_id: cryptoUser.crypto_id,
          },
        }
      );
      return "update";
    } else {
      this._cryptoIntermedioRepository.create(cryptoUser);
      return "created";
    }
  }
}
