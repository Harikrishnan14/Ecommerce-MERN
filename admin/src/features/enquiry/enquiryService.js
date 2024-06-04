import axios from "axios";
import { baseURL } from "../../utils/baseURL";


const getEnquiries = async () => {
    const response = await axios.get(`${baseURL}enquiry/`);
    return response.data;
}


const enquiryService = {
    getEnquiries,
}


export default enquiryService;
