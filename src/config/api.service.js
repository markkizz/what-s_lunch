import axios from "axios";
import { USER_LOGOUT } from "../redux/actions/actions";
import store from "../redux/store/store";

axios.defaults.baseURL = "http://localhost:8080";

const TOKEN = "ACCESS_TOKEN";
const UNPROTECTED_PATHS = ["userLogin", "userRegister"];

const isUnprotectedPath = url =>
  UNPROTECTED_PATHS.find(path => path === url) && true;

axios.interceptors.request.use(
  async config => {
    console.log(config);

    if (isUnprotectedPath(config.url)) {
      return config;
    }

    let token = localStorage.getItem(TOKEN);
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  async error => {
    throw error;
  }
);

// Redirect to login page in case of 401 response
axios.interceptors.response.use(
  async config => {
    return config;
  },
  async error => {
    if (error.request === undefined) throw error;

    let url = error.request.responseURL;
    if (error.request.status === 401 && isUnprotectedPath(url)) {
      throw error;
    }

    if (error.request.status === 401) {
      console.log("Session expire, redirect to login");

      localStorage.removeItem(TOKEN);
      store.dispatch({ type: USER_LOGOUT });
    }

    throw error;
  }
);

export default axios;
