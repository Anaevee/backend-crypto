import { cryptoIntermedioControllers } from "./../controllers/cryptointermedio.controllers";
import express from "express";
import { userController } from "../controllers/user.controllers";

const router = express.Router();

router.post("/add", userController.addUser);
router.get("/all", userController.getAllUsers);
router.get("/get/:id", cryptoIntermedioControllers.getAmountByUserId);
//TODO: Añadir endpoints

export default router;
module.exports = router;
