import { CryptoIntermedioService } from "../services/cryptointermedio.service";

const cryptoIntermedioService: CryptoIntermedioService =
  new CryptoIntermedioService();

export const cryptoIntermedioControllers = {
  getAmountByUserId: (req: any, res: any) => {
    cryptoIntermedioService.getAmountByUserId(req.params.id).then((result) => {
      return !!result ? res.send(result) : res.sendStatus(404);
    });
  },

  addCrypto: (req: any, res: any) => {
    cryptoIntermedioService.addCrypto(req.body).then((value) => {
      return !!value ? res.send(value) : res.sendStatus(404);
    });
  },

  updateCryptoUser: (req: any, res: any) => {
    try {
      const userCrypto = req.body;
      console.log(userCrypto);
      cryptoIntermedioService.updateCryptoUser(userCrypto).then((result) => {
        res.json(result);
      });
    } catch {
      res.sendStatus(400);
    }
  },
};
