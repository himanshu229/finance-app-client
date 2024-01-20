import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiService from "../apiService";

class UserInfo {
  static userInfomation = createAsyncThunk(
    "user/information",
    async (payload, thunkAPI) => {
      try {
        const data: any = await ApiService.get("user/info");
        return thunkAPI.fulfillWithValue(data?.data);
      } catch (error: any) {
        throw thunkAPI.rejectWithValue(error.response?.data);
      }
    }
  );
  static generateOtp = createAsyncThunk(
    "otp/email_phonenumber",
    async (payload: any, thunkAPI) => {
      try {
        const data: any = await ApiService.put(
          "otp/email_phonenumber",
          payload
        );
        return thunkAPI.fulfillWithValue(data?.data);
      } catch (error: any) {
        throw thunkAPI.rejectWithValue(error.response?.data);
      }
    }
  );
  static verifyOtp = createAsyncThunk(
    "otp/email_phonenumber/verify",
    async (payload: any, thunkAPI) => {
      try {
        const data: any = await ApiService.put(
          `otp/email_phonenumber/${payload.otp}`,
          payload.data
        );
        return thunkAPI.fulfillWithValue(data?.data);
      } catch (error: any) {
        throw thunkAPI.rejectWithValue(error.response?.data);
      }
    }
  );
}

export default UserInfo;
