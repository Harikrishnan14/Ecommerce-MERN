import axios from "axios";
import { baseURL } from "../../utils/baseURL";


const getProducts = async () => {
    const response = await axios.get(`${baseURL}product/`);
    return response.data;
}


const productService = {
    getProducts,
}


export default productService;
