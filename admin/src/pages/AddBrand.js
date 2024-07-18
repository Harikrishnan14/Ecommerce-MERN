import React, { useEffect } from 'react'
import CustomInput from '../components/CustomInput'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { useLocation, useNavigate } from 'react-router-dom';
import { createBrand, getABrand, resetState } from '../features/brand/brandSlice';

const AddBrand = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    const brandId = location.pathname.split("/")[3]

    let schema = yup.object().shape({
        title: yup.string().required("Brand Name is Required"),
    });

    const newBrand = useSelector((state) => state.brand);

    const { isSuccess, isError, isLoading, createdBrand, brandName } = newBrand;

    const formik = useFormik({
        initialValues: {
            title: "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            dispatch(createBrand(values));
            formik.resetForm();
            setTimeout(() => {
                // navigate('/admin/brand-list')
                dispatch(resetState());
            }, 1000);
        },
    });

    useEffect(() => {
        if (isSuccess && createdBrand) {
            toast.success("Brand Added Successfullly!");
        }
        if (isError) {
            toast.error("Something Went Wrong!");
        }
    }, [isSuccess, isError, isLoading]);

    useEffect(() => {
        if (brandId !== undefined) {
            dispatch(getABrand(brandId))
            formik.values.title = brandName
        } else {
            dispatch(resetState())
        }
    }, [brandId])

    console.log(brandName)

    return (
        <div>
            <h3 className="mb-4 title">{brandId !== undefined ? "Edit" : "Add"} Brand</h3>
            <div>
                <form action="" onSubmit={formik.handleSubmit}>
                    <CustomInput
                        type="text"
                        label="Enter New Brand"
                        name="title"
                        onChange={formik.handleChange("title")}
                        onBlur={formik.handleBlur("title")}
                        value={formik.values.title}
                    />
                    <div className="error">
                        {formik.touched.title && formik.errors.title}
                    </div>
                    <button type='submit' className='btn btn-success border-0 rounded-3 my-4'>Add Brand</button>
                </form>
            </div>
        </div>
    )
}

export default AddBrand
