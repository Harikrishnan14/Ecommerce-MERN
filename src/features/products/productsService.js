import axios from "axios";
import { baseURL } from "../../utils/axiosConfig";

const getProducts = async () => {
    const response = await axios.get(`${baseURL}product/`);
    if (response.data) {
        return response.data;
    }
}


const productsService = {
    getProducts
}


export default productsService;
