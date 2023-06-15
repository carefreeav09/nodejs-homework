const users = [
  {
    name: "Aabhushan",
    surname: "Gautam",
    userId: 1,
    age: "27",
    sex: "yes",
  },
  {
    name: "Anup",
    surname: "Subedi",
    userId: 2,
    age: "21",
    sex: "Male",
  },
];

const UsersModal = {
  fetchAllUsers: () => {
    return users;
  },

  addNewUser: (user) => {
    users.push(user);
    return users;
  },

  updateUserData: (id, user) => {
    const index = users.findIndex((user) => user.userId == id);
    if (index !== -1) {
      users[index] = user;
      return users;
    } else {
      return "User not found";
    }
  },

  deleteUser: (id) => {
    const index = users.findIndex((user) => user.userId == id);
    if (index !== -1) {
      users.splice(index, 1);
      return users;
    } else {
      return "User not found";
    }
  },
};

module.exports = UsersModal;
