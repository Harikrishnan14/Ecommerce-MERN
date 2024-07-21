import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import prodCategoryService from "./pCategoryService";

const initialState = {
    prodCategories: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: ""
}

export const getProdCategories = createAsyncThunk('productCategory/get-categories', async (thunkAPI) => {
    try {
        return await prodCategoryService.getProdCategories()
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const getAProdCategory = createAsyncThunk('productCategory/get-category', async (id, thunkAPI) => {
    try {
        return await prodCategoryService.getProdCategory(id)
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const createProdCategory = createAsyncThunk(
    "productCategory/create-category",
    async (categoryData, thunkAPI) => {
        try {
            return await prodCategoryService.createProdCategory(categoryData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const updateAProdCategory = createAsyncThunk(
    "productCategory/update-category",
    async (brand, thunkAPI) => {
        try {
            return await prodCategoryService.updateProdCategory(brand);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const deleteAProdCategory = createAsyncThunk('productCategory/delete-category', async (id, thunkAPI) => {
    try {
        return await prodCategoryService.deleteProdCategory(id)
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const resetState = createAction("Reset_all")

export const prodCategorySlice = createSlice({
    name: "prodCategories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProdCategories.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getProdCategories.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.prodCategories = action.payload
            })
            .addCase(getProdCategories.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.message = action.error
            })
            .addCase(getAProdCategory.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAProdCategory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.categoryName = action.payload;
            })
            .addCase(getAProdCategory.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(createProdCategory.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createProdCategory.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.createdProdCategory = action.payload
            })
            .addCase(createProdCategory.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.message = action.error
            })
            .addCase(updateAProdCategory.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateAProdCategory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.updatedCategory = action.payload;
            })
            .addCase(updateAProdCategory.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(deleteAProdCategory.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteAProdCategory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.deletedCategory = action.payload;
            })
            .addCase(deleteAProdCategory.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(resetState, () => initialState)
    }
})


export default prodCategorySlice.reducer;
