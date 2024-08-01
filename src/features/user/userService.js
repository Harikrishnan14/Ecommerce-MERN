import axios from "axios";
import { baseURL } from "../../utils/axiosConfig";

const register = async (user) => {
    const response = await axios.post(`${baseURL}user/register`, user);
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data))
    }
    return response.data;
}


const userService = {
    register
}


export default userService;