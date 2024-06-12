import axios from "axios";
import { baseURL } from "../../utils/baseURL";
import { config } from "../../utils/axiosConfig";


const getProducts = async () => {
    const response = await axios.get(`${baseURL}product/`);
    return response.data;
}

const createProduct = async (product) => {
    const response = await axios.post(`${baseURL}product/`, product, config);
    return response.data;
};


const productService = {
    getProducts,
    createProduct
}


export default productService;
