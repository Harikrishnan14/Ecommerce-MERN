import axios from "axios";
import { baseURL } from "../../utils/baseURL";


const getColors = async () => {
    const response = await axios.get(`${baseURL}color/`);
    return response.data;
}


const colorService = {
    getColors,
}


export default colorService;
