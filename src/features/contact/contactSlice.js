import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import contactService from "./contactService";
import { toast } from "react-toastify";

const initialState = {
    contact: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: ""
}

export const postAQuery = createAsyncThunk('contact/post-query', async (contactData, thunkAPI) => {
    try {
        return await contactService.postQuery(contactData)
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const contactSlice = createSlice({
    name: "contact",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(postAQuery.pending, (state) => {
                state.isLoading = true
            })
            .addCase(postAQuery.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.message = "success"
                state.products = action.payload
                if (state.isSuccess === true) {
                    toast.success("Contact form submitted!")
                }
            })
            .addCase(postAQuery.rejected, (state, action) => {
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


export default contactSlice.reducer;
