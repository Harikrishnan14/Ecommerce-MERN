import axios from "axios";
import { baseURL } from "../../utils/baseURL";
import { config } from "../../utils/axiosConfig";


const getBlogs = async () => {
    const response = await axios.get(`${baseURL}blog/`);
    return response.data;
}

const createBlog= async (blog) => {
    const response = await axios.post(`${baseURL}blog/`, blog, config);
    return response.data;
};



const blogService = {
    getBlogs,
    createBlog
}


export default blogService;
