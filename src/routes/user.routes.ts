import express from "express";
import { userController } from "../controllers/user.controllers";

const router = express.Router();

router.post("/add", userController.addUser);
router.get("/all", userController.getAllUsers);
router.post("/login", userController.login);

export default router;
module.exports = router;
