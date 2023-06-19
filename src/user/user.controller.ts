import { Request, Response } from "express";
import User from ".";

const userController = {
  getUsers: async (req: Request, res: Response) => {
    const users = await User.getAllUsers();
    res.status(200).json({
      message: "Success",
      data: users,
      code: 200
    });
  },

  registerUser: async (req: Request, res: Response) => {
    const data = req.body;
    const users = await User.create(data);
    res.status(200).json({
      message: "Users registered successfully",
      data: users,
      code: 200
    });
  },

  updateUser: async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = req.body;
    const users = await User.updateUserData(id, data);
    res.status(200).json({
      message: "Users updated successfully",
      data: users,
      code: 200
    });
  },

  deleteUser: async (req: Request, res: Response) => {
    const id = req.params.id;
    const users = await User.deleteUser(id);
    res.status(200).json({
      message: "Users deleted successfully",
      data: users,
      code: 200
    });
  },

  login: async (req: Request, res: Response) => {
    const data = req.body;
    const user = await User.login(data);
    if (user) {
      res.status(200).json({
        message: "Users logged in successfully",
        data: user,
        code: 200
      });
    } else {
      res.status(400).json({
        message: "User not found",
        data: null,
        code: 400
      });
    }
  }
};

export default userController
