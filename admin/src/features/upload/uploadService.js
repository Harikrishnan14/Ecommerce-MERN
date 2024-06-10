import axios from "axios";
import { baseURL } from "../../utils/baseURL";
import { config } from "../../utils/axiosConfig";


const uploadImg = async (data) => {
    const response = await axios.post(`${baseURL}upload/`, data, config);
    return response.data;
}

const deleteImg = async (id) => {
    const response = await axios.delete(`${baseURL}upload/delete-img/${id}`, config);
    return response.data;
};

const uploadService = {
    uploadImg,
    deleteImg,
};

export default uploadService;