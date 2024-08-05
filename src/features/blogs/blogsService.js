import axios from "axios";
import { baseURL } from "../../utils/axiosConfig";

const getBlogs = async () => {
    const response = await axios.get(`${baseURL}blog/`);
    if (response.data) {
        return response.data;
    }
}

const getBlog = async (id) => {
    const response = await axios.get(`${baseURL}blog/${id}`);
    if (response.data) {
        return response.data;
    }
}


const blogsService = {
    getBlogs,
    getBlog
}


export default blogsService;
