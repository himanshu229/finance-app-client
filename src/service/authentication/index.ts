import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiService from "../apiService";

interface LoginApiResponse {
    message: string,
    isLogin: boolean,
    token: string,
    expireDay: number,
}

interface ApiError {
  // Define the structure of your error response
  status: string;
  message: string;
  // Other fields as needed
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
        const data = await ApiService.post("auth/login", payload);
        return thunkAPI.fulfillWithValue(data as LoginApiResponse);
      } catch (error: any) {
        throw thunkAPI.rejectWithValue(error.response?.data);
      }
    }
  );
}

export default Authentication;
