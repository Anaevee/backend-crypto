import { Table, Column, Model } from "sequelize-typescript";
import { STRING, DECIMAL } from "sequelize";

@Table({
  freezeTableName: true,
  schema: "crypto",
  tableName: "cryptomonedas",
  createdAt: false,
  updatedAt: false,
})
export class CryptoPojo extends Model {
  @Column({
    primaryKey: true,
    type: STRING,
    field: "crypto_id",
  })
  crypto_id: string;

  @Column({
    type: STRING,
    field: "cryptoname",
  })
  cryptoname: string;

  @Column({
    type: DECIMAL,
    field: "value",
  })
  value: number;

  @Column({
    type: STRING,
    field: "icon",
  })
  icon: string;

  @Column({
    type: STRING,
    field: "asset",
  })
  asset: string;

  @Column({
    type: DECIMAL,
    field: "stock",
  })
  stock: number;
}
