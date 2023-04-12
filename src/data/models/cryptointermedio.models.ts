import { Table, Column, Model } from "sequelize-typescript";
import { STRING, DECIMAL } from "sequelize";

@Table({
  freezeTableName: true,
  schema: "crypto",
  tableName: "crypto_intermedio",
  createdAt: false,
  updatedAt: false,
})
export class CryptoIntermedioPojo extends Model {
  @Column({
    primaryKey: true,
    type: STRING,
    field: "user_id",
  })
  userId: number;
  @Column({
    primaryKey: true,
    type: STRING,
    field: "crypto_id",
  })
  crypto_id: string;

  @Column({
    type: DECIMAL,
    field: "amount",
  })
  amount: number;
}
