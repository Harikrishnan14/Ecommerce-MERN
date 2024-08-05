import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import blogsService from "./blogsService";

const initialState = {
    blogs: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: ""
}

export const getAllBlogs = createAsyncThunk('blogs/get-blogs', async (thunkAPI) => {
    try {
        return await blogsService.getBlogs()
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const getABlog = createAsyncThunk('blogs/get-blog', async (id, thunkAPI) => {
    try {
        return await blogsService.getBlog(id)
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const blogsSlice = createSlice({
    name: "blogs",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllBlogs.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllBlogs.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.message = "success"
                state.blogs = action.payload
            })
            .addCase(getAllBlogs.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.message = action.error
            })
            .addCase(getABlog.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getABlog.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.message = "success"
                state.singleBlog = action.payload
            })
            .addCase(getABlog.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.message = action.error
            })
    }
})


export default blogsSlice.reducer;
