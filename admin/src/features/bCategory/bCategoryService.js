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

const getBlogCategory = async (id) => {
    const response = await axios.get(`${baseURL}blogcategory/${id}`, config);
    return response.data;
};

const updateBlogCategory = async (category) => {
    const response = await axios.put(`${baseURL}blogcategory/${category.id}`, { title: category.categoryData.title }, config);
    return response.data;
};

const deleteBlogCategory = async (id) => {
    const response = await axios.delete(`${baseURL}blogcategory/${id}`, config);
    return response.data;
};


const blogCategoryService = {
    getBlogCategories,
    createBlogCategory,
    getBlogCategory,
    updateBlogCategory,
    deleteBlogCategory
}


export default blogCategoryService;
