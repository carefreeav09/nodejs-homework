import express from "express";
import userController from "./user.controller";
const userRouter = express.Router();

userRouter.get("/", userController.getUsers);

userRouter.post("/", userController.registerUser);

userRouter.post("/login", userController.login);

userRouter.put("/:id", userController.updateUser);

userRouter.delete("/:id", userController.deleteUser);


export default userRouter;
