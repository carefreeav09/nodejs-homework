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

const UserModal = {
  fetchAllUsers: () => {
    return new Promise((resolve) => {
      resolve(users);
    });
  },

  addNewUser: (user) => {
    return new Promise((resolve) => {
      users.push(user);
      resolve(users);
    });
  },

  updateUserData: (id, user) => {
    return new Promise((resolve) => {
      const index = users.findIndex((user) => user.userId == id);
      users[index] = user;
      resolve(user);
    });
  },

  deleteUser: (id) => {
    return new Promise((resolve, reject) => {
      const index = users.findIndex((user) => user.userId == id);
      try {
        if (index !== -1) {
          users.splice(index, 1);
          resolve(users);
        } else {
          resolve(users);
        }
      } catch (err) {
        reject(err);
      }
    });
  },
};

module.exports = UserModal;
