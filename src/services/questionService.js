import axios from "axios";
import NProgress from "nprogress";

const apiCall = axios.create({
  baseURL: "https://mcq-mern-app.herokuapp.com",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

apiCall.interceptors.request.use((res) => {
  NProgress.start();
  return res;
});

apiCall.interceptors.response.use((config) => {
  NProgress.done();
  return config;
});

export default {
  getQuestions() {
    return apiCall.get("/api");
  },
};
