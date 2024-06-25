import React, { useEffect } from 'react'
import CustomInput from '../components/CustomInput'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';
import { createColor } from '../features/color/colorSlice';

const AddColor = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    let schema = yup.object().shape({
        title: yup.string().required("Color is Required"),
    });

    const newColor = useSelector((state) => state.color);

    const { isSuccess, isError, isLoading, createdColor } = newColor

    const formik = useFormik({
        initialValues: {
            title: "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            dispatch(createColor(values));
            formik.resetForm();
            setTimeout(() => {
                navigate('/admin/color-list')
            }, 1000);
        },
    });

    useEffect(() => {
        if (isSuccess && createdColor) {
            toast.success("Color Added Successfullly!");
        }
        if (isError) {
            toast.error("Something Went Wrong!");
        }
    }, [isSuccess, isError, isLoading, createdColor]);

    return (
        <div>
            <h3 className="mb-4 title">Add Color</h3>
            <div>
                <form action="" onSubmit={formik.handleSubmit}>
                    <CustomInput
                        type="color"
                        label="Enter Color"
                        name="title"
                        onChange={formik.handleChange("title")}
                        onBlur={formik.handleBlur("title")}
                        value={formik.values.title}
                    />
                    <div className="error">
                        {formik.touched.title && formik.errors.title}
                    </div>
                    <button type='submit' className='btn btn-success border-0 rounded-3 my-4'>Add Color</button>
                </form>
            </div>
        </div>
    )
}

export default AddColor
