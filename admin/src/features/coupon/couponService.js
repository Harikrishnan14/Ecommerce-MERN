import axios from "axios";
import { baseURL } from "../../utils/baseURL";
import { config } from "../../utils/axiosConfig";


const getCoupons = async () => {
    const response = await axios.get(`${baseURL}coupon/`, config);
    return response.data;
}

const getCoupon = async (id) => {
    const response = await axios.get(`${baseURL}coupon/${id}`, config);
    return response.data;
};

const createCoupon = async (coupon) => {
    const response = await axios.post(`${baseURL}coupon/`, coupon, config);
    return response.data;
};

const updateCoupon = async (coupon) => {
    const response = await axios.put(`${baseURL}coupon/${coupon.id}`, {
        name: coupon.couponData.name,
        expiry: coupon.couponData.expiry,
        discount: coupon.couponData.discount,
    }, config);
    return response.data;
};

const deleteCoupon = async (id) => {
    const response = await axios.delete(`${baseURL}coupon/${id}`, config);
    return response.data;
};



const couponService = {
    getCoupons,
    getCoupon,
    createCoupon,
    updateCoupon,
    deleteCoupon
}


export default couponService;
