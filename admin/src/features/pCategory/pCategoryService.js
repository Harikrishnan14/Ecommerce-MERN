import axios from "axios";
import { baseURL } from "../../utils/baseURL";
import { config } from "../../utils/axiosConfig";


const getProdCategories = async () => {
    const response = await axios.get(`${baseURL}category/`);
    return response.data;
}

const createProdCategory = async (category) => {
    const response = await axios.post(`${baseURL}category/`, category, config);
    return response.data;
};


const prodCategoryService = {
    getProdCategories,
    createProdCategory
}


export default prodCategoryService;
