import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetCookies, RemoveCookies } from "../../../helper/cookies";
import deviceDetect from "../../../helper/deviceDetect";

type UserInfo = {
  firstName: string;
  lastName: string;
  email: string;
  id: string;
  phoneNumber: string;
};

type Coordinate = {
  lat?: number;
  long?: number;
};
type AuthType = {
  token?: string | undefined | null;
  isNavigate?: boolean;
  userInfo?: any;
  coordinate: Coordinate;
  deviceInfo: {
    os: string;
    browser: string;
  };
};

const initialState: AuthType = {
  token: GetCookies("token"),
  isNavigate: false,
  userInfo: undefined,
  coordinate: {
    lat: 0,
    long: 0,
  },
  deviceInfo: {
    os: deviceDetect().os,
    browser: deviceDetect().browser,
  },
};

export const AuthuserSlice = createSlice({
  name: "authuser",
  initialState,
  reducers: {
    setCoordinate: (state, action: PayloadAction<Coordinate>) => {
      return {
        ...state,
        coordinate: {
          lat: action.payload?.lat,
          long: action.payload?.long,
        },
      };
    },
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

export const { setToken, setLogOut, setUserInfo, setCoordinate } =
  AuthuserSlice.actions;

export default AuthuserSlice.reducer;
