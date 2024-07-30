import axios from "axios";
import { baseURL } from "../../utils/baseURL";
import { config } from "../../utils/axiosConfig";


const getEnquiries = async () => {
    const response = await axios.get(`${baseURL}enquiry/`);
    return response.data;
}

const getEnquiry = async (id) => {
    const response = await axios.get(`${baseURL}enquiry/${id}`, config);
    return response.data;
}

const updateEnquiry = async (enquiry) => {
    const response = await axios.put(`${baseURL}enquiry/${enquiry.id}`, { status: enquiry.enquiryData }, config);
    return response.data;
};

const deleteEnquiry = async (id) => {
    const response = await axios.delete(`${baseURL}enquiry/${id}`, config);
    return response.data;
};


const enquiryService = {
    getEnquiries,
    getEnquiry,
    updateEnquiry,
    deleteEnquiry
}


export default enquiryService;
