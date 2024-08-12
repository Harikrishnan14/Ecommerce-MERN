import axios from "axios";
import { baseURL, config } from "../../utils/axiosConfig";

const register = async (user) => {
    const response = await axios.post(`${baseURL}user/register`, user);
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data))
    }
    return response.data;
}

const login = async (user) => {
    const response = await axios.post(`${baseURL}user/login`, user);
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data))
    }
    return response.data;
}

const getUserWishlist = async () => {
    const response = await axios.get(`${baseURL}user/wishlist`, config);
    if (response.data) {
        return response.data;
    }
}

const addToCart = async (cartData) => {
    const response = await axios.post(`${baseURL}user/cart`, cartData, config);
    if (response.data) {
        return response.data;
    }
}

const getCart = async () => {
    const response = await axios.get(`${baseURL}user/cart`, config);
    if (response.data) {
        return response.data;
    }
}

const removeProductFromCart = async (cartItemId) => {
    const response = await axios.delete(`${baseURL}user/remove-from-cart/${cartItemId}`, config);
    if (response.data) {
        return response.data;
    }
}

const updateProductFromCart = async (cartDetail) => {
    const response = await axios.delete(`${baseURL}user/update-from-cart/${cartDetail.cartItemId}/${cartDetail.quantity}`, config);
    if (response.data) {
        return response.data;
    }
}

const userService = {
    register,
    login,
    getUserWishlist,
    addToCart,
    getCart,
    removeProductFromCart,
    updateProductFromCart
}


export default userService;
