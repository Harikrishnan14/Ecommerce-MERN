import axios from "axios";
import { baseURL } from "../../utils/baseURL";

const getTokenFromLocalStorage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null

const config = {
    headers: {
        Authorization: `Bearer ${getTokenFromLocalStorage.token}`,
        Accept: "application/json",
    }
}

const login = async (user) => {
    const response = await axios.post(`${baseURL}user/admin-login`, user);
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data))
    }
    return response.data;
}

const getOrders = async () => {
    const response = await axios.get(`${baseURL}user/get-orders`, config);
    return response.data;
}


const authService = {
    login,
    getOrders
}


export default authService;
