import axios from "axios";
import { baseURL } from "../../utils/baseURL";


const getBlogs = async () => {
    const response = await axios.get(`${baseURL}blog/`);
    return response.data;
}


const blogService = {
    getBlogs,
}


export default blogService;
