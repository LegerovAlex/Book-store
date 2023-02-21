export type IUser = {
  email: string;
  password: string;
  loggedIn: boolean;
};

export interface IinitialUsersState {
  user: null | IUser;
}
