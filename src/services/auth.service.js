// Authentication service.
import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://cbda-103-125-176-195.ngrok.io/user/";

// Register Service.
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

// Login Service.
const login = async (email, password) => {
  const response = await axios.post(
    API_URL + "signin",
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

// Logout Service.
const logout = () => {
  localStorage.removeItem("user");
};

// ProfileCreation Service.
// Register Service.
const profileCreation = async (profilePayload) => {
  const response = await axios.post(
    API_URL + "profile/createProfile",
    profilePayload,
    {
      headers: authHeader(),
    }
  );

  return response.data;
};

const authService = {
  register,
  login,
  logout,
  profileCreation,
};

export default authService;
