import { login } from "@/services";
import { authHeader } from "@/services/helper";
import axios from "axios";
import { createStore } from "vuex";

export interface UserInfo {
  id: Number;
  username: String;
  email: String;
  firstName: String;
  lastName: String;
  gender: String;
  image: String;
  token: String;
}

export default createStore({
  state: {
    userInfo: null as UserInfo | null,
  },
  mutations: {
    SET_USER_INFO(state, userInfo) {
      state.userInfo = userInfo;
    },
  },
  actions: {
    async userLogin({ commit }, payload: any): Promise<any> {
      let response = await login(payload);
      // @ts-ignore
      localStorage.setItem("usr", JSON.stringify(response.token));
      commit("SET_USER_INFO", response);
      return response;
    },

    async getCurrentUser({ commit }) {
      let response = await axios.get("https://dummyjson.com/auth/me", {
        headers: authHeader(),
      });
      commit("SET_USER_INFO", response);
      return response;
    },
    // async signUpNewUser({ commit }, payload) {
    //     let response = await axios.
    // },
  },
  getters: {},
});
