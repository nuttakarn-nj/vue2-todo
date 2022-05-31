import axios from "axios";
import { LOGIN_URL } from "../Setting";

export interface ILoginResponse {
  data?: {
    token: string;
  };
  error?: any;
}

export const login = async (): Promise<ILoginResponse> => {
  let response;

  try {
    const data = (await axios.get(LOGIN_URL)).data;
    response = { data };
  } catch (e) {
    response = {
      error: e,
    };
  }

  return response;
};
