import { Model, AllowNull, Column, DataType, Table, Unique, HasOne } from "sequelize-typescript";

export interface IUser {
  name: string;
  surname: string;
  userId: number;
  age: string;
  sex: string;
}

const users: IUser[] = [
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


@Table({ timestamps: true })
class User extends Model {
  @Unique
  @Column
  username: string;

  @Column
  password: string;

  @Column
  type: string;

  @AllowNull
  @Column({ type: DataType.BOOLEAN })
  isPremium: Boolean;
}




const UserModel = {
  fetchAllUsers: (): Promise<IUser[]> => {
    return new Promise((resolve) => {
      resolve(users);
    });
  },

  addNewUser: (user: IUser): Promise<IUser[]> => {
    return new Promise((resolve) => {
      users.push(user);
      resolve(users);
    });
  },

  updateUserData: (id: string, user: IUser): Promise<IUser> => {
    return new Promise((resolve) => {
      const index = users.findIndex((user) => user.userId == +id);
      users[index] = user;
      resolve(user);
    });
  },

  deleteUser: (id: string): Promise<IUser[]> => {
    return new Promise((resolve, reject) => {
      const index = users.findIndex((user) => user.userId == +id);
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

export default UserModel;
