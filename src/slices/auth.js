import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../services/auth.service";

// Get user from localStorage.
// const user = JSON.parse(localStorage.getItem("user"));

//  Register User.
export const register = createAsyncThunk(
  "auth/register",
  async ({ name, email, password, role }, thunkAPI) => {
    try {
      const data = await AuthService.register(name, email, password, role);
      if (data.status !== "SUCCESS") {
        return thunkAPI.rejectWithValue(data.message);
      }
      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// User Login.
export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const data = await AuthService.login(email, password);
      if (data.status !== "SUCCESS") {
        return thunkAPI.rejectWithValue(data.message);
      }
      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// User Logout.
export const logout = createAsyncThunk("auth/logout", async () => {
  await AuthService.logout();
});

// Register User.
export const profileCreation = createAsyncThunk(
  "auth/profileCreation",
  async (profilePayload, thunkAPI) => {
    try {
      const data = await AuthService.profileCreation(profilePayload);
      if (data.status !== "SUCCESS") {
        return thunkAPI.rejectWithValue(data.message);
      }
      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// /////////////////////////////////
//  (Community Flow API) (PersonelUser).
// /////////////////////////////////
export const addProject = createAsyncThunk(
  "auth/addProject",
  async ({ projectName, location, images, id }, thunkAPI) => {
    try {
      const data = await AuthService.addProject(projectName, location, images, id);
      if (data.status !== "SUCCESS") {
        return thunkAPI.rejectWithValue(data.message);
      }
      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateProfile = createAsyncThunk(
  "auth/updateProfile",
  async ({ profilePhoto, name, email, phoneNumber, role, category, subCategory, id }, thunkAPI) => {
    try {
      const data = await AuthService.updateProfile(profilePhoto, name, email, phoneNumber, role, category, subCategory, id);
      if (data.status !== "SUCCESS") {
        return thunkAPI.rejectWithValue(data.message);
      }
      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteProject = createAsyncThunk(
  "auth/deleteProject",
  async ({ profileId, projectId }, thunkAPI) => {
    try {
      const data = await AuthService.deleteProject(profileId, projectId);
      if (data.status !== "SUCCESS") {
        return thunkAPI.rejectWithValue(data.message);
      }
      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateProject = createAsyncThunk(
  "auth/updateProject",
  async ({ projectName, location, images, profileId, projectId }, thunkAPI) => {
    try {
      const data = await AuthService.updateProject(projectName, location, images, profileId, projectId);
      if (data.status !== "SUCCESS") {
        return thunkAPI.rejectWithValue(data.message);
      }
      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const reviewProject = createAsyncThunk(
  "auth/reviewProject",
  async ({ name, title, stars, phoneNumber, review, profileId, projectId }, thunkAPI) => {
    try {
      const data = await AuthService.reviewProject(name, title, stars, phoneNumber, review, profileId, projectId);
      if (data.status !== "SUCCESS") {
        return thunkAPI.rejectWithValue(data.message);
      }
      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// This is a temporary code here, this will be put in seperate slice after.
export const getCommunityUser = createAsyncThunk(
  "auth/getCommunityUser",
  async (thunkAPI) => {
    try {
      const data = await AuthService.getCommunityUser();
      if (data.status !== "SUCCESS") {
        return thunkAPI.rejectWithValue(data.message);
      }
      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Initial State.
const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  conditionalFlag: null,
  projectsFlag: null,
  // communityUser: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
      state.conditionalFlag = "";
      state.projectsFlag = "";
    },
    updateConditionalFlag: (state, action) => {
      state.conditionalFlag = action.payload;
    },
    updateProjectsFlag: (state, action) => {
      state.projectsFlag = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      })
      .addCase(profileCreation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(profileCreation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
        // state.user = action.payload;
      })
      .addCase(profileCreation.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(addProject.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addProject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
        state.user = action.payload;
      })
      .addCase(addProject.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
        state.user = action.payload;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteProject.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
        state.user = action.payload;
      })
      .addCase(deleteProject.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateProject.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
        state.user = action.payload;
      })
      .addCase(updateProject.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(reviewProject.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(reviewProject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(reviewProject.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getCommunityUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCommunityUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.message = action.payload.message;
      })
      .addCase(getCommunityUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
  },
});

export const { reset, updateConditionalFlag, updateProjectsFlag } = authSlice.actions;
const { reducer } = authSlice;
export default reducer;