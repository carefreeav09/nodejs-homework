const User = require("./user.model");

const userController = {
  getUsers: async (req, res) => {
    const users = await User.fetchAllUsers();
    res.send(users);
  },
  createUser: async (req, res) => {
    const data = req.body;
    const users = await User.addNewUser(data);
    res.send(users);
  },
  updateUser: async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const users = await User.updateUserData(id, data);
    res.send(users);
  },
  deleteUser: async (req, res) => {
    const id = req.params.id;
    const users = await User.deleteUser(id);
    res.send(users);
  },
};

module.exports = userController;
