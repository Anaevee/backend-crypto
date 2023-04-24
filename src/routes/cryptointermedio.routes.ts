import { cryptoIntermedioControllers } from "./../controllers/cryptointermedio.controllers";
import express from "express";

const cryptoIntermedio = express.Router();

cryptoIntermedio.get("/get/:id", cryptoIntermedioControllers.getAmountByUserId);
cryptoIntermedio.post("/get/addCrypto", cryptoIntermedioControllers.addCrypto);
cryptoIntermedio.post("/update", cryptoIntermedioControllers.updateCryptoUser);

export default cryptoIntermedio;
module.exports = cryptoIntermedio;
