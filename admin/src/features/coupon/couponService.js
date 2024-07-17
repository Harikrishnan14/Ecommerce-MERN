import axios from "axios";
import { baseURL } from "../../utils/baseURL";
import { config } from "../../utils/axiosConfig";


const getCoupons = async () => {
    const response = await axios.get(`${baseURL}coupon/`, config);
    return response.data;
}

const createCoupon = async (coupon) => {
    const response = await axios.post(`${baseURL}coupon/`, coupon, config);
    return response.data;
};



const couponService = {
    getCoupons,
    createCoupon
}


export default couponService;
