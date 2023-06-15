const Users = require("./user.modal");

const usersController = {
  getUsers: (req, res) => {
    const users = Users.fetchAllUsers();
    res.send(users);
  },
  createUser: (req, res) => {
    const data = req.body;
    const users = Users.addNewUser(data);
    return res.send(users);
  },
  updateUser: (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const users = Users.updateUserData(id, data);
    return res.send(users);
  },
  deleteUser: (req, res) => {
    const id = req.params.id;
    const users = Users.deleteUser(id);
    return res.send(users);
  },
};

module.exports = usersController;
