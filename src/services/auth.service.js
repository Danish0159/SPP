// Authentication service.
import axios from "axios";

const API_URL = "http://cbda-103-125-176-195.ngrok.io/user/";

// async can be used.
const register = async (name, email, password, role) => {
  const response = await axios.post(
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

  return response.data;
};

const login = async (email, password) => {
  const response = await axios.post(
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
  );

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
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
