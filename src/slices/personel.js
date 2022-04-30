import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PersonelService from "../services/personel.service";

// Initial State.
const initialState = {
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

export const addProject = createAsyncThunk(
    "personel/addProject",
    async ({ projectName, location, src }, thunkAPI) => {
        try {
            const data = await PersonelService.addProject(projectName, location, src);
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

const userSlice = createSlice({
    name: "personel",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.message = "";
        },
    },
    extraReducers(builder) {
        builder
            .addCase(addProject.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addProject.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.users = action.payload;
            })
            .addCase(addProject.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
    },
});

export const { reset } = userSlice.actions;
const { reducer } = userSlice;
export default reducer;