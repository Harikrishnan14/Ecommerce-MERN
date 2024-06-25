import axios from "axios";
import { baseURL } from "../../utils/baseURL";
import { config } from "../../utils/axiosConfig";


const getColors = async () => {
    const response = await axios.get(`${baseURL}color/`);
    return response.data;
}

const createColor = async (color) => {
    const response = await axios.post(`${baseURL}color/`, color, config);
    return response.data;
};


const colorService = {
    getColors,
    createColor
}


export default colorService;
