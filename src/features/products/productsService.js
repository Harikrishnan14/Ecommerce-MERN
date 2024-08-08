import axios from "axios";
import { baseURL, config } from "../../utils/axiosConfig";

const getProducts = async () => {
    const response = await axios.get(`${baseURL}product/`);
    if (response.data) {
        return response.data;
    }
}

const getProduct = async (id) => {
    const response = await axios.get(`${baseURL}product/${id}`);
    if (response.data) {
        return response.data;
    }
}

const addToWishList = async (prodId) => {
    const response = await axios.put(`${baseURL}product/wishlist`, { prodId }, config);
    if (response.data) {
        return response.data;
    }
}


const productsService = {
    getProducts,
    getProduct,
    addToWishList
}


export default productsService;
