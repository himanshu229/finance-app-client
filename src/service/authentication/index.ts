import axios from "axios";

class Authentication {
  static async register(payload: any) {
    try {
      const { data } = await axios.post("auth/register", payload);
      return data;
    } catch (error:any) {
      return error.response.data;
    }
  }
}

export default Authentication;
