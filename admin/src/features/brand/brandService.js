import axios from "axios";
import { baseURL } from "../../utils/baseURL";
import { config } from "../../utils/axiosConfig";


const getBrands = async () => {
    const response = await axios.get(`${baseURL}brand/`);
    return response.data;
}

const createBrand = async (brand) => {
    const response = await axios.post(`${baseURL}brand/`, brand, config);
    return response.data;
};

const getBrand = async (id) => {
    const response = await axios.get(`${baseURL}brand/${id}`, config);
    return response.data;
};

const updateBrand = async (brand) => {
    const response = await axios.put(`${baseURL}brand/${brand.id}`, { title: brand.brandData.title }, config);
    return response.data;
};



const brandService = {
    getBrands,
    getBrand,
    createBrand,
    updateBrand
}


export default brandService;
