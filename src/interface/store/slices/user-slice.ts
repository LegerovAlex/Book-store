export type IUser = {
  name: string;
  email: string;
  password: string;
  loggedIn: boolean;
};

export interface IinitialUsersState {
  user: null | IUser;
}
