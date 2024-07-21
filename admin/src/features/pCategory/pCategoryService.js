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

const getProdCategory = async (id) => {
    const response = await axios.get(`${baseURL}category/${id}`, config);
    return response.data;
};

const updateProdCategory = async (category) => {
    const response = await axios.put(`${baseURL}category/${category.id}`, { title: category.categoryData.title }, config);
    return response.data;
};

const deleteProdCategory = async (id) => {
    const response = await axios.delete(`${baseURL}category/${id}`, config);
    return response.data;
};


const prodCategoryService = {
    getProdCategories,
    createProdCategory,
    getProdCategory,
    updateProdCategory,
    deleteProdCategory
}


export default prodCategoryService;
