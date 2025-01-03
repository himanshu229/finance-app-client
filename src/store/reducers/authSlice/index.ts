import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import deviceDetect from "../../../helper/deviceDetect";
import { GetCookies, SetCookies } from "../../../helper/cookiesStore";
import Authentication from "../../../service/authentication";
import UserInfo from "../../../service/userInfo";

type Coordinate = {
  lat?: number;
  long?: number;
};
type AuthType = {
  token?: string | undefined | null;
  isNavigate?: boolean;
  userInfo?: any;
  coordinate: Coordinate;
  validate: boolean | null;
  deviceInfo: {
    os: string;
    browser: string;
  };
};

const initialState: AuthType = {
  token: GetCookies("auth_user"),
  isNavigate: false,
  userInfo: undefined,
  coordinate: {
    lat: 0,
    long: 0,
  },
  validate: null,
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
  },
  extraReducers: (builder) => {
    builder.addCase(Authentication.login.pending, (state, action) => {});
    builder.addCase(Authentication.login.fulfilled, (state, action: any) => {
      state.token = action.payload.token;
      SetCookies({
        name: "auth_user",
        value: action.payload.token,
        exdays: Number(action.payload.expireDay),
      });
    });
    builder.addCase(Authentication.login.rejected, (state, action) => {});
    builder.addCase(UserInfo.userInfomation.pending, (state, action) => {});
    builder.addCase(UserInfo.userInfomation.fulfilled, (state, action: any) => {
      state.validate =
        !action.payload.isEmailVerified || !action.payload.isPhoneVerified;

      state.userInfo = action.payload;
    });
    builder.addCase(UserInfo.userInfomation.rejected, (state, action) => {});
  },
});

export const { setCoordinate } = AuthuserSlice.actions;

export default AuthuserSlice.reducer;
