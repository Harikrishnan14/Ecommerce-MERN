import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice'
import customerReducer from "../features/customers/customerSlice";
import productReducer from "../features/product/productSlice";
import brandReducer from "../features/brand/brandSlice";
import prodCategoryReducer from "../features/pCategory/pCategorySlice";
import blogReducer from "../features/blogs/blogSlice";
import blogCategoryReducer from "../features/bCategory/bCategorySlice";
import colorReducer from "../features/color/colorSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        customer: customerReducer,
        product: productReducer,
        brand: brandReducer,
        prodCategory: prodCategoryReducer,
        blog: blogReducer,
        blogCategory: blogCategoryReducer,
        color: colorReducer,
    }
})