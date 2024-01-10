import axios from "axios";

class Authentication {
  static async register(payload: any) {
    try {
      const response = await axios.post("auth/register", payload);
      return response;
    } catch (error) {
      return error;
    }
  }
}

export default Authentication;
