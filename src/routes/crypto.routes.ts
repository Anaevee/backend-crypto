import { cryptoControllers } from "./../controllers/crypto.controllers";
import express from "express";

const crypto = express.Router();

crypto.get("/all", cryptoControllers.getAllUsersCrypto);

export default crypto;
module.exports = crypto;
