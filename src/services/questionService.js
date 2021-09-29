import axios from "axios";

const apiCall = axios.create({
  baseURL: "https://mcq-mern-app.herokuapp.com",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default {
  getQuestions() {
    return apiCall.get("/api");
  },
};
