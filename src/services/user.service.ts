import { UserDto, CryptoUserDto } from "./../controllers/types";
import { NewUserDto } from "../controllers/types";
import { UserRepository } from "../data/repositories/user.repository";
import { UserPojo } from "../data/models/use.models";

export class UserService {
  _userRepository: UserRepository;
  constructor() {
    this._userRepository = new UserRepository();
  }

  async addUser(user: NewUserDto): Promise<number> {
    const userPojo: UserPojo = this.parseDtoIntoPojo(user);
    const userPromise = await this._userRepository
      .addUser(userPojo)
      .then((userId) => {
        return userId;
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
    return userPromise;
  }

  async getAllUsers(): Promise<UserDto[]> {
    const userPromise = await this._userRepository
      .getAllUsers()
      .then((usersAsPojo) => {
        console.log(usersAsPojo);
        let usersAsDto: UserDto[] = [];
        usersAsPojo.forEach((usersAsPojo) => {
          let userAsDto = this.parsePojoIntoDto(usersAsPojo);
          usersAsDto.push(userAsDto);
        });
        return usersAsDto;
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
    return userPromise;
  }

  async getUserById(id: number): Promise<UserDto | undefined> {
    const userPromise = await this._userRepository
      .getUserById(id)
      .then((userAsPojo) => {
        if (!!userAsPojo) {
          return this.parsePojoIntoDto(userAsPojo);
        } else {
          return undefined;
        }
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
    return userPromise;
  }
  async login(username: string): Promise<UserDto | undefined> {
    const userPromise = await this._userRepository
      .login(username)
      .then((userAsPojo) => {
        console.log(userAsPojo);
        if (userAsPojo != null) {
          return this.parsePojoIntoDto(userAsPojo);
        } else {
          console.log("error aqui");
          return undefined;
        }
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
    return userPromise;
  }

  parsePojoIntoDto(userPojo: UserPojo): UserDto {
    const userDto: UserDto = {
      user_id: userPojo.dataValues.user_id,
      username: userPojo.dataValues.username,
      password: userPojo.dataValues.password,
      email: userPojo.dataValues.email,
      deposit: userPojo.dataValues.deposit,
    };

    return userDto;
  }
  parseDtoIntoPojo(UserDto: NewUserDto): UserPojo {
    let userPojo: UserPojo = new UserPojo();
    userPojo.setDataValue("user_id", null);
    userPojo.setDataValue("username", UserDto.username);
    userPojo.setDataValue("password", UserDto.password);
    userPojo.setDataValue("email", UserDto.email);
    userPojo.setDataValue("deposit", UserDto.deposit);

    return userPojo;
  }

  parseInputCryptoUser = (object: any): CryptoUserDto => {
    const cryptoUser: CryptoUserDto = {
      user_id: object.user_id,
      crypto_id: object.crypto_id,
      amount: object.ampunt,
    };
    return cryptoUser;
  };
}
