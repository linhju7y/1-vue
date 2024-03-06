import axios from "axios";
import type { UserInfo } from "../store/index";
const baseUrl = "https://dummyjson.com";

interface Response {
  data: UserInfo;
}
export const login = async (payload: {
  username: string;
  password: string;
}): Promise<Response> => {
  let response = await axios.post(`${baseUrl}/auth/login`, payload);
  return response.data;
};


