import express from "express";
import userController from './user.controller';
const router = express.Router();

router.get("/", userController.getUsers);

router.put("/", userController.createUser);

router.patch("/:id", userController.updateUser);

router.delete("/:id", userController.deleteUser);

export default router;
