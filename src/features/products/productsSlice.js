import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productsService from "./productsService";

const initialState = {
    products: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: ""
}

export const getAllProducts = createAsyncThunk('product/get-products', async (thunkAPI) => {
    try {
        return await productsService.getProducts()
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const productsSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.message = "success"
                state.products = action.payload
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.message = action.error
            })
    }
})


export default productsSlice.reducer;
