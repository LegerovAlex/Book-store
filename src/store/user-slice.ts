import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type IUser = {
  name: string;
  email: string;
  password: string;
  loggedIn: boolean;
};

interface IinitialUsersState {
  user: null | IUser;
}

const initialUsersState: IinitialUsersState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUsersState,
  reducers: {
    login: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      state.user = null;
    },
  },
});

export default userSlice.reducer;
export const { login, logOut } = userSlice.actions;
