import axios from "axios";
import { baseURL } from "../../utils/baseURL";

const getTokenFromLocalStorage = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
};

const tokenData = getTokenFromLocalStorage();

const config = {
    headers: {
        Authorization: tokenData ? `Bearer ${tokenData.token}` : '',
        Accept: "application/json",
    }
}

const login = async (user) => {
    const response = await axios.post(`${baseURL}user/admin-login`, user);
    if (response.data) {
        localStorage.setItem("admin", JSON.stringify(response.data))
    }
    return response.data;
}

const getOrders = async () => {
    const response = await axios.get(`${baseURL}user/get-all-orders`, config);
    return response.data;
}

const getOrder = async (id) => {
    const response = await axios.post(`${baseURL}user/get-orders-by-user/${id}`, "", config);
    return response.data;
}


const authService = {
    login,
    getOrders,
    getOrder
}


export default authService;
