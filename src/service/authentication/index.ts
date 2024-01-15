import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiService from "../apiService";

class Authentication {
  static register = createAsyncThunk("auth/register", async (payload: any) => {
    try {
      const data = await ApiService.post("auth/register", payload);
      return data;
    } catch (error: any) {
      return error.response?.data;
    }
  });
  static login = createAsyncThunk("auth/login", async (payload: any) => {
    try {
      const data = await ApiService.post("auth/login", payload);
      return data;
    } catch (error: any) {
      return error.response?.data;
    }
  });
}

export default Authentication;
