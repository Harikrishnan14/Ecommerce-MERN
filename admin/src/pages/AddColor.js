import React, { useEffect } from 'react'
import CustomInput from '../components/CustomInput'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { useLocation, useNavigate } from 'react-router-dom';
import { createColor, getAColor, resetState, updateAColor } from '../features/color/colorSlice';

const AddColor = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    const colorId = location.pathname.split("/")[3]

    let schema = yup.object().shape({
        title: yup.string().required("Color is Required"),
    });

    const newColor = useSelector((state) => state.color);

    const { isSuccess, isError, isLoading, createdColor, colorName, updatedColor } = newColor

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: colorName || "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            if (colorId !== undefined) {
                const data = { id: colorId, colorData: values };
                dispatch(updateAColor(data));
                dispatch(resetState());
            } else {
                dispatch(createColor(values));
                formik.resetForm();
                setTimeout(() => {
                    dispatch(resetState());
                }, 1000);
            }
        },
    });

    useEffect(() => {
        if (colorId !== undefined) {
            dispatch(getAColor(colorId));
        } else {
            dispatch(resetState());
        }
    }, [colorId]);

    useEffect(() => {
        if (isSuccess && createdColor) {
            toast.success("Color Added Successfullly!");
        }
        if (isSuccess && updatedColor) {
            toast.success("Color Updated Successfullly!");
            navigate("/admin/color-list");
        }

        if (isError) {
            toast.error("Something Went Wrong!");
        }
    }, [isSuccess, isError, isLoading]);

    return (
        <div>
            <h3 className="mb-4 title">{colorId !== undefined ? "Edit" : "Add"} Color</h3>
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
                    <button type='submit' className='btn btn-success border-0 rounded-3 my-4'>{colorId !== undefined ? "Edit" : "Add"} Color</button>
                </form>
            </div>
        </div>
    )
}

export default AddColor
