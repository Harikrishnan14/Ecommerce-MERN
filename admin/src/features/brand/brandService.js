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



const brandService = {
    getBrands,
    createBrand
}


export default brandService;
