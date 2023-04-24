import { UserService } from "../services/user.service";
import * as jwt from "jsonwebtoken";
const userService: UserService = new UserService();

export const userController = {
  addUser: (req: any, res: any) => {
    try {
      const newUser = req.body;
      userService.addUser(newUser).then((result) => {
        req.json(result);
      });
    } catch (excepcion) {
      console.error(excepcion);
      res.sendStatus(500);
    }
  },
  getAllUsers: (_req: any, res: any) => {
    userService
      .getAllUsers()
      .then((result) => {
        res.json(result);
      })
      .catch((excepcion) => {
        console.error(excepcion);
        res.sendStatus(500);
      });
  },

  getUserById: (req: any, res: any) => {
    userService.getUserById(+req.params.id).then((result) => {
      return !!result ? res.send(result) : res.sendStatus(404);
    });
  },
  login: (req: any, res: any) => {
    try {
      const usuarioLogin = req.body;
      userService.login(usuarioLogin.username).then((result) => {
        console.log(result);
        if (result != null && result.password === usuarioLogin.password) {
          const token = jwt.sign(
            {
              user_id: result.user_id,
              username: result.username,
              email: result.email,
              deposit: result.deposit,
            },
            "clave privada"
          );
          res.json({ token });
        } else {
          res.sendStatus(500);
        }
      });
    } catch {
      res.sendStatus(400);
    }
  },
};
