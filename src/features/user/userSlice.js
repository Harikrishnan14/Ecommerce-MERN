import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from './userService'
import { toast } from "react-toastify";

const getUserFromLocalStorage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null

const initialState = {
    user: getUserFromLocalStorage,
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

export const loginUser = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
    try {
        return await userService.login(userData)
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const getUserProdWishlist = createAsyncThunk('user/wishlist', async (thunkAPI) => {
    try {
        return await userService.getUserWishlist()
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
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.message = "success"
                state.createdUser = action.payload
                if (state.isSuccess === true) {
                    localStorage.setItem('token', action.payload.token)
                    toast.success("Logged in Successfully!")
                }
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.message = action.error
            })
            .addCase(getUserProdWishlist.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getUserProdWishlist.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.message = "success"
                state.wishlist = action.payload
            })
            .addCase(getUserProdWishlist.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.message = action.error
            })
    }
})


export default userSlice.reducer;
