import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from './userService'
import { toast } from "react-toastify";

const initialState = {
    user: "",
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: ""
}

export const registerUser = createAsyncThunk('auth/register', async (userData, thunkAPI) => {
    try {
        return await userService.register(userData)
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const userSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.message = "success"
                state.createdUser = action.payload
                if (state.isSuccess === true) {
                    toast.success("Registration Successful")
                }
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.message = action.error
                if (state.isError === true) {
                    toast.error("Oops, something went wrong!")
                }
            })
    }
})


export default userSlice.reducer;