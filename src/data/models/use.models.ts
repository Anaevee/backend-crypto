import { Table, Column, Model } from "sequelize-typescript";
import { INTEGER, STRING } from "sequelize";

@Table({
  freezeTableName: true,
  schema: "crypto",
  tableName: "users",
  createdAt: false,
  updatedAt: false,
})
export class UserPojo extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: INTEGER,
    field: "user_id",
  })
  userId: number;

  @Column({
    type: STRING,
    field: "username",
  })
  username: string;

  @Column({
    type: STRING,
    field: "password",
  })
  password: string;

  @Column({
    type: STRING,
    field: "email",
  })
  email: string;
}
