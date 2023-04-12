import { CryptoIntermedioPojo } from "./../data/models/cryptointermedio.models";
import { CryptoIntermedioDto } from "../controllers/types";
import { CryptoIntermedioRepository } from "../data/repositories/cryptointermedio.repository";

export class CryptoIntermedioService {
  _cryptointermedioRepository: CryptoIntermedioRepository;
  constructor() {
    this._cryptointermedioRepository = new CryptoIntermedioRepository();
  }

  async getAmountByUserId(
    userId: string
  ): Promise<CryptoIntermedioDto[] | undefined> {
    const userNamePromise = await this._cryptointermedioRepository
      .getAmountByUserId(userId)
      .then((amountsByUserPojo) => {
        let amountsByUserDto: CryptoIntermedioDto[] = [];
        amountsByUserPojo.forEach((amountsByUserPojoAsPojo) => {
          let amountsByUserPojoAsDto = this.parsePojoIntoDto(
            amountsByUserPojoAsPojo
          );
          amountsByUserDto.push(amountsByUserPojoAsDto);
        });
        return amountsByUserDto;
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
    return userNamePromise;
  }

  async addCrypto(buy: CryptoIntermedioDto): Promise<CryptoIntermedioDto> {
    const cryptoName = await this._cryptointermedioRepository
      .addCrypto(buy)
      .then((addCryptoByPojo) => {
        return this.parsePojoIntoDto(addCryptoByPojo);
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
    return cryptoName;
  }

  parsePojoIntoDto(
    CryptoIntermedioPojo: CryptoIntermedioPojo
  ): CryptoIntermedioDto {
    const cryptoIntermedioDto: CryptoIntermedioDto = {
      user_id: CryptoIntermedioPojo.dataValues.user_id,
      crypto_id: CryptoIntermedioPojo.dataValues.crypto_id,
      amount: CryptoIntermedioPojo.dataValues.amount,
    };

    return cryptoIntermedioDto;
  }
}
