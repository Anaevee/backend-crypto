import { CryptoService } from "../services/crypto.service";

const cryptoService: CryptoService = new CryptoService();

export const cryptoControllers = {
  getAllUsersCrypto: (_req: any, res: any) => {
    cryptoService.getAllUsersCrypto().then((result) => {
      return !!result ? res.json(result) : res.sendStatus(404);
    });
  },
};
