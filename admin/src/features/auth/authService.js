import axios from "axios";
import { baseURL } from "../../utils/baseURL";


const login = async (user) => {
    const response = await axios.post(`${baseURL}user/admin-login`, user);
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data))
    }
    return response.data;
}


const authService = {
    login,
}


export default authService;
