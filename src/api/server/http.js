import axios from "axios";

const instance = axios.create({
  baseURL: "https://random-data-api.com/api",
  timeout: 10000,
});

export default instance;
