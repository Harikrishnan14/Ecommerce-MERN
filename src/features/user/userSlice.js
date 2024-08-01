import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from './userService'

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
                state.user = action.payload
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.message = action.error
            })
    }
})


export default userSlice.reducer;
