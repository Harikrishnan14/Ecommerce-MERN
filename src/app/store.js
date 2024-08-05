import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import productReducer from '../features/products/productsSlice'
import blogReducer from "../features/blogs/blogsSlice";

export const store = configureStore({
    reducer: {
        auth: userReducer,
        product: productReducer,
        blog: blogReducer
    }
})