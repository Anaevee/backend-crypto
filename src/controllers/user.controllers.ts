import { UserService } from "../services/user.service";
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
};
