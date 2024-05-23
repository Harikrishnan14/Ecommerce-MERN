import axios from "axios";
import { baseURL } from "../../utils/baseURL";


const login = async (userData) => {
    const response = axios.post(`${baseURL}user/admin-login`, userData);
    console.log(response);
}


const authService = {
    login,
}


export default authService;
