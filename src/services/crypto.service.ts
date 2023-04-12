import { CryptoDto } from "./../controllers/types";
import { CryptoPojo } from "../data/models/cryptomonedas.models";
import { CryptoRepository } from "../data/repositories/cyptomonedas.repository";

export class CryptoService {
  _cryptoRepository: CryptoRepository;
  constructor() {
    this._cryptoRepository = new CryptoRepository();
  }

  async getAllUsersCrypto(): Promise<CryptoDto[] | undefined> {
    const cryptoAmountPromise = await this._cryptoRepository
      .getAllUsers()
      .then((CryptoPojo) => {
        let AllCryptoDto: CryptoDto[] = [];
        CryptoPojo.forEach((CryptoPojoAsPojo) => {
          let getAllCryptoPojoAsDto = this.parsePojoIntoDto(CryptoPojoAsPojo);
          AllCryptoDto.push(getAllCryptoPojoAsDto);
        });
        return AllCryptoDto;
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
    return cryptoAmountPromise;
  }

  parsePojoIntoDto(cryptoPojo: CryptoPojo): CryptoDto {
    const cryptoDto: CryptoDto = {
      crypto_id: cryptoPojo.dataValues.crypto_id,
      cryptoname: cryptoPojo.dataValues.cryptoname,
      value: cryptoPojo.dataValues.value,
      icon: cryptoPojo.dataValues.icon,
      asset: cryptoPojo.dataValues.asset,
      stock: cryptoPojo.dataValues.stock,
    };

    return cryptoDto;
  }
}
