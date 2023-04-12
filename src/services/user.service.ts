import { NewUserDto, UserDto } from "../controllers/types";
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

  parsePojoIntoDto(userPojo: UserPojo): UserDto {
    const userDto: UserDto = {
      user_id: userPojo.dataValues.userId,
      username: userPojo.dataValues.username,
      password: userPojo.dataValues.password,
      email: userPojo.dataValues.email,
    };

    return userDto;
  }
  parseDtoIntoPojo(UserDto: NewUserDto): UserPojo {
    let userPojo: UserPojo = new UserPojo();
    userPojo.setDataValue("userId", null);
    userPojo.setDataValue("username", UserDto.username);
    userPojo.setDataValue("password", UserDto.password);
    userPojo.setDataValue("email", UserDto.email);

    return userPojo;
  }
}
