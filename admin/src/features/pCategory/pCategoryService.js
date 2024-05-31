import axios from "axios";
import { baseURL } from "../../utils/baseURL";


const getProdCategories = async () => {
    const response = await axios.get(`${baseURL}category/`);
    return response.data;
}


const prodCategoryService = {
    getProdCategories,
}


export default prodCategoryService;
