import axios from "axios";

const register = async (user) => {
    const response = await axios.post(`${baseURL}user/admin-login`, user);
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data))
    }
    return response.data;
}


const userService = {
    register
}


export default userService;
