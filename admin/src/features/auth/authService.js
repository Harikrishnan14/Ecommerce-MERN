import axios from "axios";
import { baseURL } from "../../utils/baseURL";


const login = async (userData) => {
    const response = await axios.post(`${baseURL}user/admin-login`, userData);
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data))
    }
    return response.data;
}


const authService = {
    login,
}


export default authService;
