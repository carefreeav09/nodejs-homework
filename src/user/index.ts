import UserService from './user.service';
// import business from './user.business';
import UserModel from './user.model';

const User = new UserService(UserModel);

export default User;

