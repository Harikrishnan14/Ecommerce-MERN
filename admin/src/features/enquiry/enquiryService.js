import axios from "axios";
import { baseURL } from "../../utils/baseURL";
import { config } from "../../utils/axiosConfig";


const getEnquiries = async () => {
    const response = await axios.get(`${baseURL}enquiry/`);
    return response.data;
}

const deleteEnquiry = async (id) => {
    const response = await axios.delete(`${baseURL}enquiry/${id}`, config);
    return response.data;
};


const enquiryService = {
    getEnquiries,
    deleteEnquiry
}


export default enquiryService;
