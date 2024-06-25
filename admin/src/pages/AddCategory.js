import React, { useEffect } from 'react'
import CustomInput from '../components/CustomInput'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';
import { createProdCategory } from '../features/pCategory/pCategorySlice';

const AddCategory = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    let schema = yup.object().shape({
        title: yup.string().required("Category Name is Required"),
    });

    const newCategory = useSelector((state) => state.prodCategory);

    const { isSuccess, isError, isLoading, createdProdCategory } = newCategory

    const formik = useFormik({
        initialValues: {
            title: "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            dispatch(createProdCategory(values));
            formik.resetForm();
            setTimeout(() => {
                navigate('/admin/category-list')
            }, 1000);
        },
    });

    useEffect(() => {
        if (isSuccess && createdProdCategory) {
            toast.success("Category Added Successfullly!");
        }
        if (isError) {
            toast.error("Something Went Wrong!");
        }
    }, [isSuccess, isError, isLoading, createdProdCategory]);

    return (
        <div>
            <h3 className="mb-4 title">Add Category</h3>
            <div>
                <form action="" onSubmit={formik.handleSubmit}>
                    <CustomInput
                        type="text"
                        label="Enter New Category"
                        name="title"
                        onChange={formik.handleChange("title")}
                        onBlur={formik.handleBlur("title")}
                        value={formik.values.title}
                    />
                    <div className="error">
                        {formik.touched.title && formik.errors.title}
                    </div>
                    <button type='submit' className='btn btn-success border-0 rounded-3 my-4'>Add Category</button>
                </form>
            </div>
        </div>
    )
}

export default AddCategory
