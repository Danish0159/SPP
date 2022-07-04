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

  if (response.data && response.data.status === "SUCCESS") {
    const user = {
      name: response.data.user.name,
      token: response.data.token,
      profile: response.data.user.profile,
      role: response.data.user.role,
    }
    localStorage.setItem("user", JSON.stringify(user));
  }
  return response.data;
};

// Logout Service.
const logout = () => {
  localStorage.removeItem("user");
};

// ProfileCreation.
const profileCreation = async (profilePayload) => {
  const response = await axios.post(
    "https://warm-cove-25020.herokuapp.com/api/profile/createprofile",
    profilePayload,
    {
      headers: authHeader(),
    }
  );
  if (response.data && response.data.status === "SUCCESS") {
    const user = JSON.parse(localStorage.getItem("user"));
    user.profile = true;
    localStorage.setItem("user", JSON.stringify(user));
  }

  return response.data;
};

// /////////////////////////////////
// (Community Flow API) (PersonelUser).
// /////////////////////////////////
const addProject = async (projectName, location, description, images, id) => {
  const response = await axios.patch(
    `https://warm-cove-25020.herokuapp.com/api/profile/addproject/${id}`,
    {
      projectName, location, description, images
    },
    {
      headers: authHeader(),
    }
  );

  // if (response.data) {
  //   localStorage.setItem("user", JSON.stringify(response.data));
  // }

  return response.data;
};

const updateProfile = async (profilePhoto, name, email, phoneNumber, role, category, subCategory, id) => {
  const response = await axios.patch(
    `https://warm-cove-25020.herokuapp.com/api/profile/updateprofile/${id}`,
    {
      profilePhoto, name, email, phoneNumber, role, category, subCategory,
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

const updateProject = async (projectName, location, images, profileId, projectId) => {
  const response = await axios.patch(
    `https://warm-cove-25020.herokuapp.com/api/profile/updateproject/${profileId}/${projectId}`,
    {
      projectName, location, images
    },
    {
      headers: authHeader(),
    }
  );

  return response.data;
};


const getCommunityUser = async () => {
  const response = await axios.get(
    "https://warm-cove-25020.herokuapp.com/api/user/getuser",
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
  updateProject,
  getCommunityUser,
};

export default authService;