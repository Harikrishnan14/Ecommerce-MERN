import React, { useEffect } from 'react'
import CustomInput from '../components/CustomInput'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { createCoupon, getACoupon, resetState, updateACoupon } from '../features/coupon/couponSlice';
import { useLocation, useNavigate } from 'react-router-dom';

const AddCoupon = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    const couponId = location.pathname.split("/")[3]

    let schema = yup.object().shape({
        name: yup.string().required("Coupon Name is Required"),
        expiry: yup.date().required("Expiry Date is Required"),
        discount: yup.number().required("Discount Price is Required"),
    });

    const newCoupon = useSelector((state) => state.coupon);

    const { isSuccess, isError, isLoading, createdCoupon, couponName, couponExpiry, couponDiscount, updatedCoupon } = newCoupon;

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: couponName || "",
            expiry: couponExpiry || "",
            discount: couponDiscount || "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            if (couponId !== undefined) {
                const data = { id: couponId, couponData: values };
                dispatch(updateACoupon(data));
                dispatch(resetState());
            } else {
                dispatch(createCoupon(values));
                formik.resetForm();
                setTimeout(() => {
                    dispatch(resetState());
                }, 1000);
            }
        },
    });

    useEffect(() => {
        if (couponId !== undefined) {
            dispatch(getACoupon(couponId));
        } else {
            dispatch(resetState());
        }
    }, [couponId]);

    useEffect(() => {
        if (isSuccess && createdCoupon) {
            toast.success("Coupon Added Successfullly!");
        }
        if (isSuccess && updatedCoupon) {
            toast.success("Coupon Updated Successfullly!");
            navigate("/admin/coupon-list");
        }

        if (isError) {
            toast.error("Something Went Wrong!");
        }
    }, [isSuccess, isError, isLoading]);

    return (
        <div>
            <h3 className="mb-4 title">{couponId !== undefined ? "Edit" : "Add"} Coupon</h3>
            <div>
                <form action="" onSubmit={formik.handleSubmit}>
                    <CustomInput
                        type="text"
                        label="Enter Coupon Name"
                        name="name"
                        onChange={formik.handleChange("name")}
                        onBlur={formik.handleBlur("name")}
                        value={formik.values.name}
                    />
                    <div className="error">
                        {formik.touched.name && formik.errors.name}
                    </div>
                    <CustomInput
                        type="date"
                        label="Enter Expiry Date"
                        name="expiry"
                        onChange={formik.handleChange("expiry")}
                        onBlur={formik.handleBlur("expiry")}
                        value={formik.values.expiry}
                    />
                    <div className="error">
                        {formik.touched.expiry && formik.errors.expiry}
                    </div>
                    <CustomInput
                        type="number"
                        label="Enter Discount Price"
                        name="discount"
                        onChange={formik.handleChange("discount")}
                        onBlur={formik.handleBlur("discount")}
                        value={formik.values.discount}
                    />
                    <div className="error">
                        {formik.touched.discount && formik.errors.discount}
                    </div>
                    <button type='submit' className='btn btn-success border-0 rounded-3 my-4'>{couponId !== undefined ? "Edit" : "Add"} Coupon</button>
                </form>
            </div>
        </div>
    )
}

export default AddCoupon
