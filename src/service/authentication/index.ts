import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiService from "../apiService";

class Authentication {
  static register = createAsyncThunk("register/user", async (payload: any) => {
    try {
      const data = await ApiService.post("auth/register", payload);
      return data;
    } catch (error: any) {
      return error.response?.data;
    }
  });
}

export default Authentication;
