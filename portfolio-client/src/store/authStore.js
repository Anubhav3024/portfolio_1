import { defineStore } from "pinia";
import { loginAdmin } from "../services/api";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: localStorage.getItem("admin_token") || null,
    username: localStorage.getItem("admin_username") || null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    async login(credentials) {
      const { data } = await loginAdmin(credentials);
      this.token = data.token;
      this.username = data.username;
      localStorage.setItem("admin_token", data.token);
      localStorage.setItem("admin_username", data.username);
    },
    logout() {
      this.token = null;
      this.username = null;
      localStorage.removeItem("admin_token");
      localStorage.removeItem("admin_username");
    },
  },
});
