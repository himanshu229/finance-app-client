import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiService from "../apiService";

interface LoginApiResponse {
    message: string,
    isLogin: boolean,
    token: string,
    expireDay: number,
}

class Authentication {
  static register = createAsyncThunk("auth/register", async (payload: any, thunkAPI) => {
    try {
      const data = await ApiService.post("auth/register", payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error: any) {
      throw thunkAPI.rejectWithValue(error.response?.data);
    }
  });
  static login = createAsyncThunk(
    "auth/login",
    async (payload: any, thunkAPI) => {
      try {
        const data:any = await ApiService.post("auth/login", payload);
        ApiService.setToken(data.token)
        return thunkAPI.fulfillWithValue(data as LoginApiResponse);
      } catch (error: any) {
        throw thunkAPI.rejectWithValue(error.response?.data);
      }
    }
  );
}

export default Authentication;
