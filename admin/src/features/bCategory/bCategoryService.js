import axios from "axios";
import { baseURL } from "../../utils/baseURL";
import { config } from "../../utils/axiosConfig";


const getBlogCategories = async () => {
    const response = await axios.get(`${baseURL}blogcategory/`);
    return response.data;
}

const createBlogCategory = async (blog) => {
    const response = await axios.post(`${baseURL}blogcategory/`, blog, config);
    return response.data;
};


const blogCategoryService = {
    getBlogCategories,
    createBlogCategory
}


export default blogCategoryService;
