import React, { useEffect } from 'react'
import CustomInput from '../components/CustomInput'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { useLocation, useNavigate } from 'react-router-dom';
import { createBlogCategory, getABlogCategory, resetState, updateABlogCategory } from '../features/bCategory/bCategorySlice';

const AddBlogCategory = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    const categoryId = location.pathname.split("/")[3]

    let schema = yup.object().shape({
        title: yup.string().required("Category Name is Required"),
    });

    const newCategory = useSelector((state) => state.blogCategory);

    const { isSuccess, isError, isLoading, createdBlogCategory, categoryName, updatedCategory } = newCategory

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: categoryName || "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            if (categoryId !== undefined) {
                const data = { id: categoryId, categoryData: values };
                dispatch(updateABlogCategory(data));
                dispatch(resetState());
            } else {
                dispatch(createBlogCategory(values));
                formik.resetForm();
                setTimeout(() => {
                    dispatch(resetState());
                    navigate('/admin/blog-category-list')
                }, 1000);
            }
        },
    });

    useEffect(() => {
        if (categoryId !== undefined) {
            dispatch(getABlogCategory(categoryId));
        } else {
            dispatch(resetState());
        }
    }, [categoryId]);

    useEffect(() => {
        if (isSuccess && createdBlogCategory) {
            toast.success("Blog Category Added Successfullly!");
        }
        if (isSuccess && updatedCategory) {
            toast.success("Category Updated Successfullly!");
            navigate("/admin/blog-category-list");
        }

        if (isError) {
            toast.error("Something Went Wrong!");
        }
    }, [isSuccess, isError, isLoading]);

    return (
        <div>
            <h3 className="mb-4 title">{categoryId !== undefined ? "Edit" : "Add"} Blog Category</h3>
            <div>
                <form action="" onSubmit={formik.handleSubmit}>
                    <CustomInput
                        type="text"
                        label="Enter Blog Category"
                        name="title"
                        onChange={formik.handleChange("title")}
                        onBlur={formik.handleBlur("title")}
                        value={formik.values.title}
                    />
                    <div className="error">
                        {formik.touched.title && formik.errors.title}
                    </div>
                    <button type='submit' className='btn btn-success border-0 rounded-3 my-4'>{categoryId !== undefined ? "Edit" : "Add"} Blog Category</button>
                </form>
            </div>
        </div>
    )
}

export default AddBlogCategory
