export class UserDto {
  user_id: string;
  username: string;
  password: string;
  email: string;
  deposit: number;
}

export type NewUserDto = Omit<UserDto, "userId">;

export class CryptoIntermedioDto {
  user_id: string;
  crypto_id: string;
  amount: number;
}

export class CryptoDto {
  crypto_id: string;
  cryptoname: string;
  value: number;
  icon: string;
  asset: string;
  stock: number;
}

export class CryptoUserDto {
  user_id: string;
  crypto_id: string;
  amount: number;
}
