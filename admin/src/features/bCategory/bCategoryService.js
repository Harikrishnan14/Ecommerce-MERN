import axios from "axios";
import { baseURL } from "../../utils/baseURL";


const getBlogCategories = async () => {
    const response = await axios.get(`${baseURL}blogcategory/`);
    return response.data;
}


const blogCategoryService = {
    getBlogCategories,
}


export default blogCategoryService;
