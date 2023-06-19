class UserService {
  userModel: any;
  constructor(model: any) {
    this.userModel = model;
  }

  async create(data: any) {
    const user = await this.userModel.create(data);
    return user;
  }

  async getAllUsers() {
    const users = await this.userModel.find();
    return users;
  }

  async getUserByEmail(email: number) {
    const user = await this.userModel.findOne({ email: email });
    return user;
  };

  async login(data: any) {
    const user = await this.userModel.findOne({ email: data.email, password: data.password });
    return user;
  }

  async updateUserData(id: string, data: any) {
    const user = await this.userModel.findByIdAndUpdate(id, data, { returnDocument: 'after' });
    return user;
  }

  async deleteUser(id: string) {
    const user = await this.userModel.findByIdAndDelete(id);
    return user;
  }
}

export default UserService;