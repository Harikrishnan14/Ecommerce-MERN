import React, { useEffect } from 'react'
import CustomInput from '../components/CustomInput'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { useLocation, useNavigate } from 'react-router-dom';
import { createBrand, getABrand, resetState, updateABrand } from '../features/brand/brandSlice';

const AddBrand = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    const brandId = location.pathname.split("/")[3]

    let schema = yup.object().shape({
        title: yup.string().required("Brand Name is Required"),
    });

    const newBrand = useSelector((state) => state.brand);

    const { isSuccess, isError, isLoading, createdBrand, brandName, updatedBrand, } = newBrand;

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: brandName || "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            if (brandId !== undefined) {
                const data = { id: brandId, brandData: values };
                dispatch(updateABrand(data));
                dispatch(resetState());
            } else {
                dispatch(createBrand(values));
                formik.resetForm();
                setTimeout(() => {
                    dispatch(resetState());
                }, 1000);
            }
        },
    });

    useEffect(() => {
        if (brandId !== undefined) {
            dispatch(getABrand(brandId));
        } else {
            dispatch(resetState());
        }
    }, [brandId]);

    useEffect(() => {
        if (isSuccess && createdBrand) {
            toast.success("Brand Added Successfullly!");
        }
        if (isSuccess && updatedBrand) {
            toast.success("Brand Updated Successfullly!");
            navigate("/admin/brand-list");
        }

        if (isError) {
            toast.error("Something Went Wrong!");
        }
    }, [isSuccess, isError, isLoading]);

    // console.log(brandName)

    return (
        <div>
            <h3 className="mb-4 title">{brandId !== undefined ? "Edit" : "Add"} Brand</h3>
            <div>
                <form action="" onSubmit={formik.handleSubmit}>
                    <CustomInput
                        type="text"
                        label="Enter Brand Name"
                        name="title"
                        onChange={formik.handleChange("title")}
                        onBlur={formik.handleBlur("title")}
                        value={brandId ? formik.values.title : formik.values.title}
                    />
                    <div className="error">
                        {formik.touched.title && formik.errors.title}
                    </div>
                    <button type='submit' className='btn btn-success border-0 rounded-3 my-4'>{brandId !== undefined ? "Update" : "Add Brand"}</button>
                </form>
            </div>
        </div>
    )
}

export default AddBrand
