import React, { useEffect } from 'react'
import CustomInput from '../components/CustomInput'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { createCoupon, resetState } from '../features/coupon/couponSlice';

const AddCoupon = () => {

    const dispatch = useDispatch()

    let schema = yup.object().shape({
        name: yup.string().required("Coupon Name is Required"),
        expiry: yup.date().required("Expiry Date is Required"),
        discount: yup.number().required("Discount Price is Required"),
    });

    const newCoupon = useSelector((state) => state.coupon);

    const { isSuccess, isError, isLoading, createdCoupon } = newCoupon;

    const formik = useFormik({
        initialValues: {
            name: "",
            expiry: "",
            discount: "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            dispatch(createCoupon(values));
            formik.resetForm();
            setTimeout(() => {
                dispatch(resetState());
            }, 1000);
        },
    });

    useEffect(() => {
        if (isSuccess && createdCoupon) {
            toast.success("Coupon Added Successfullly!");
        }
        if (isError) {
            toast.error("Something Went Wrong!");
        }
    }, [isSuccess, isError, isLoading]);

    return (
        <div>
            <h3 className="mb-4 title">Add Coupon</h3>
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
                    <button type='submit' className='btn btn-success border-0 rounded-3 my-4'>Add Coupon</button>
                </form>
            </div>
        </div>
    )
}

export default AddCoupon
