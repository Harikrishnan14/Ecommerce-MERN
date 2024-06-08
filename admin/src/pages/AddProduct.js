import React, { useEffect, useState } from 'react'
import CustomInput from '../components/CustomInput'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux';
import { getBrands } from '../features/brand/brandSlice';
import { getProdCategories } from '../features/pCategory/pCategorySlice';
import { getColors } from '../features/color/colorSlice';
import Multiselect from "react-widgets/Multiselect";
import "react-widgets/styles.css";

const AddProduct = () => {

    const [desc, setDesc] = useState()
    const [color, setColor] = useState([])

    const dispatch = useDispatch()

    let schema = Yup.object({
        title: Yup.string().required("Title is Required"),
        description: Yup.string().required("Description is Required"),
        price: Yup.number().required("Price is Required"),
        brand: Yup.string().required("Brand is Required"),
        category: Yup.string().required("Category is Required"),
        color: Yup.array().required("Colors are Required"),
        quantity: Yup.number().required("Quantity is Required"),
    });

    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
            price: "",
            brand: "",
            category: "",
            color: "",
            quantity: "",
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
        dispatch(getColors())
        formik.values.color = color
    }, [])

    const brandState = useSelector((state) => state.brand.brands)
    const categoryState = useSelector((state) => state.prodCategory.prodCategories)
    const colorState = useSelector((state) => state.color.colors)

    const colors = []
    colorState.forEach(element => {
        colors.push({
            _id: element._id,
            color: element.title
        })
    });

    // console.log(color);

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
                    <select
                        className='form-control py-3 mb-3'
                        name="brand"
                        id=""
                        value={formik.values.brand}
                        onChange={formik.handleChange("brand")}
                        onBlur={formik.handleBlur("brand")}
                    >
                        <option value="">Select Brand</option>
                        {
                            brandState.map((item, index) => (
                                <option key={index} value={item.title}>{item.title}</option>
                            ))
                        }
                    </select>
                    <div className="error">
                        {formik.touched.brand && formik.errors.brand}
                    </div>
                    <select
                        className='form-control py-3 mb-3'
                        name="category"
                        id=""
                        value={formik.values.category}
                        onChange={formik.handleChange("category")}
                        onBlur={formik.handleBlur("category")}
                    >
                        <option value="">Select Category</option>
                        {
                            categoryState.map((item, index) => (
                                <option key={index} value={item.title}>{item.title}</option>
                            ))
                        }
                    </select>
                    <div className="error">
                        {formik.touched.category && formik.errors.category}
                    </div>
                    <Multiselect
                        name="color"
                        dataKey="id"
                        textField="color"
                        placeholder='Select Color'
                        data={colors}
                        onChange={(e) => setColor(e)}
                    />
                    <div className="error">
                        {formik.touched.color && formik.errors.color}
                    </div>
                    <CustomInput
                        type="number"
                        label="Enter Product Quantity"
                        name="quantity"
                        value={formik.values.quantity}
                        onChange={formik.handleChange("quantity")}
                        onBlur={formik.handleBlur("quantity")}
                    />
                    <div className="error">
                        {formik.touched.quantity && formik.errors.quantity}
                    </div>
                    <button className='btn btn-success border-0 rounded-3 my-5'>Add Product</button>
                </form>
            </div>
        </div>
    )
}

export default AddProduct
