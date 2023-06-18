import { Request, Response } from "express";
import User from "./user.model";

const userController = {
  getUsers: async (req: Request, res: Response) => {
    const users = await User.fetchAllUsers();
    res.send(users);
  },
  createUser: async (req: Request, res: Response) => {
    const data = req.body;
    const users = await User.addNewUser(data);
    res.send(users);
  },
  updateUser: async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = req.body;
    const users = await User.updateUserData(id, data);
    res.send(users);
  },
  deleteUser: async (req: Request, res: Response) => {
    const id = req.params.id;
    const users = await User.deleteUser(id);
    res.send(users);
  },
};

export default userController
