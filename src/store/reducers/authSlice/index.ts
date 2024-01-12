import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetCookies, RemoveCookies } from "../../../helper/Cookies";


type UserInfo = {
  firstName: string;
  lastName: string;
  email: string;
  id: string;
  phoneNumber: string;
};

type AuthType = {
  token?: string | undefined | null;
  isNavigate?: boolean;
  userInfo?: any;
};

const initialState: AuthType = {
  token: GetCookies("token"),
  isNavigate: false,
  userInfo: undefined,
};

export const AuthuserSlice = createSlice({
  name: "authuser",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<AuthType>) => {
      state.token = action.payload.token;
    },
    setLogOut: (state) => {
      RemoveCookies("token");
      state.token = null;
    },
    setUserInfo: (state, action: PayloadAction<UserInfo>) => {
      return {
        ...state,
      };
    },
  },
});

export const { setToken, setLogOut, setUserInfo } = AuthuserSlice.actions;

export default AuthuserSlice.reducer;
