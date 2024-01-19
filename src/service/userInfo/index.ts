import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiService from "../apiService";

interface LoginApiResponse {
  message: string;
  isLogin: boolean;
  token: string;
  expireDay: number;
}

class UserInfo {
  static information = createAsyncThunk(
    "user/info",
    async (payload, thunkAPI) => {
      try {
        const data: any = await ApiService.get("user/info");
        console.log(data.data)
        return thunkAPI.fulfillWithValue(data?.data);
      } catch (error: any) {
        throw thunkAPI.rejectWithValue(error.response?.data);
      }
    }
  );
}

export default UserInfo;
