import React, { useEffect, useState } from 'react'
import CustomInput from '../components/CustomInput'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux';
import { getBrands } from '../features/brand/brandSlice';
import { getProdCategories } from '../features/pCategory/pCategorySlice';

const AddProduct = () => {

    const [desc, setDesc] = useState()

    const dispatch = useDispatch()

    let schema = Yup.object({
        title: Yup.string().required("Title is Required"),
        description: Yup.string().required("Description is Required"),
        price: Yup.number().required("Price is Required"),
    });

    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
            price: "",
        },
        validationSchema: schema,
        onSubmit: values => {
            alert(JSON.stringify(values));
        },
    });

    const handleDesc = (e) => {
        setDesc(e)
    }

    useEffect(() => {
        dispatch(getBrands())
        dispatch(getProdCategories())
    }, [])

    const brandState = useSelector((state) => state.brand.brands)
    const categoryState = useSelector((state) => state.prodCategory.prodCategories)

    return (
        <div>
            <h3 className="mb-4 title">Add Product</h3>
            <div>
                <form action="" onSubmit={formik.handleSubmit} className='d-flex flex-column gap-3'>
                    <CustomInput
                        type="text"
                        label="Enter Product Title"
                        name="title"
                        value={formik.values.title}
                        onChange={formik.handleChange("title")}
                        onBlur={formik.handleBlur("title")}
                    />
                    <div className="error">
                        {formik.touched.title && formik.errors.title}
                    </div>
                    <div className=''>
                        <ReactQuill
                            theme="snow"
                            name="description"
                            value={formik.values.description}
                            onChange={formik.handleChange("description")}
                            onBlur={formik.handleBlur("description")}
                        />
                    </div>
                    <div className="error">
                        {formik.touched.description && formik.errors.description}
                    </div>
                    <CustomInput
                        type="number"
                        label="Enter Product Price"
                        name="price"
                        value={formik.values.price}
                        onChange={formik.handleChange("price")}
                        onBlur={formik.handleBlur("price")}
                    />
                    <div className="error">
                        {formik.touched.price && formik.errors.price}
                    </div>
                    <select name="" id="" className='form-control py-3 mb-3'>
                        <option value="">Select Brand</option>
                        {
                            brandState.map((item, index) => (
                                <option key={index} value={item.title}>{item.title}</option>
                            ))
                        }
                    </select>
                    <div className="error">
                        {formik.touched.title && formik.errors.title}
                    </div>
                    <select name="" id="" className='form-control py-3 mb-3'>
                        <option value="">Select Category</option>
                        {
                            categoryState.map((item, index) => (
                                <option key={index} value={item.title}>{item.title}</option>
                            ))
                        }
                    </select>
                    <div className="error">
                        {formik.touched.title && formik.errors.title}
                    </div>
                    <select name="" id="" className='form-control py-3 mb-3'>
                        <option value="">Select Color</option>
                    </select>
                    <div className="error">
                        {formik.touched.title && formik.errors.title}
                    </div>
                    <CustomInput type="text" label="Enter Product Title" />
                    <div className="error">
                        {formik.touched.title && formik.errors.title}
                    </div>
                    <button className='btn btn-success border-0 rounded-3 my-5'>Add Product</button>
                </form>
            </div>
        </div>
    )
}

export default AddProduct
