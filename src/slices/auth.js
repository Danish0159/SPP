import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../services/auth.service";

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

// Get user from localStorage
const user = JSON.parse(localStorage.getItem("user"));

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

//  Register User.
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
// Flow3 API's (Community Flow API).
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

// Initial State.
const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  countryFlag: "",
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
      state.countryFlag = "";
    },
    updateCountryFlag: (state, action) => {
      state.countryFlag = action.payload;
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
        state.user = action.payload;
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
        state.user = action.payload;
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
  },
});

export const { reset, updateCountryFlag } = authSlice.actions;
const { reducer } = authSlice;
export default reducer;