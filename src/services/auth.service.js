// Authentication service
import axios from "axios";

const API_URL = "http://cbda-103-125-176-195.ngrok.io/user/";

// async can be used.
const register = (name, email, password, role) => {
  return axios.post(
    API_URL + "signup",
    {
      name,
      email,
      password,
      role,
    },
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
};

const login = (email, password) => {
  return axios
    .post(
      API_URL + "login",
      {
        email,
        password,
      },
      {
        headers: {
          "content-type": "application/json",
        },
      }
    )
    .then((response) => {
      //Or
      // if (response.data) {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
