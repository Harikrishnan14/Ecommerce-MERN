import axios from "axios";
import { baseURL, config } from "../../utils/axiosConfig";

const postQuery = async (contactData) => {
    const response = await axios.post(`${baseURL}enquiry/`, contactData);
    if (response.data) {
        return response.data;
    }
}


const contactService = {
    postQuery
}


export default contactService;
