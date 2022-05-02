// Authentication service.
import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "https://warm-cove-25020.herokuapp.com/api/user/";
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
    "https://warm-cove-25020.herokuapp.com/api/profile/createprofile",
    profilePayload,
    {
      headers: authHeader(),
    }
  );

  return response.data;
};

// /////////////////////////////////
// Flow3 API's (Community Flow API).
// /////////////////////////////////
const addProject = async (projectName, location, images, id) => {
  const response = await axios.patch(
    `https://warm-cove-25020.herokuapp.com/api/profile/addproject/${id}`,
    {
      projectName, location, images
    },
    {
      headers: authHeader(),
    }
  );

  return response.data;
};

const updateProfile = async (name, email, role, phoneNumber, id) => {
  const response = await axios.patch(
    `https://warm-cove-25020.herokuapp.com/api/profile/updateprofile/${id}`,
    {
      name, email, role, phoneNumber
    },
    {
      headers: authHeader(),
    }
  );

  return response.data;
};

const deleteProject = async (profileId, projectId) => {
  const response = await axios.delete(
    `https://warm-cove-25020.herokuapp.com/api/profile/deleteproject/${profileId}/${projectId}`,
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
  addProject,
  updateProfile,
  deleteProject,
};

export default authService;