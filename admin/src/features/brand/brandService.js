import axios from "axios";
import { baseURL } from "../../utils/baseURL";


const getBrands = async () => {
    const response = await axios.get(`${baseURL}brand/`);
    return response.data;
}


const brandService = {
    getBrands,
}


export default brandService;
