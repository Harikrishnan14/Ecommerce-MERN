import { React, useEffect, useState } from "react";
import CustomInput from '../components/CustomInput'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Dropzone from "react-dropzone";
import { deleteImg, uploadImg } from "../features/upload/uploadSlice";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { createBlog, getABlog, resetState, updateABlog } from "../features/blogs/blogSlice";
import { getBlogCategories } from "../features/bCategory/bCategorySlice";

const AddBlog = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [desc, setDesc] = useState("");
    const [images, setImages] = useState([]);

    const blogId = location.pathname.split("/")[3];

    let schema = yup.object().shape({
        title: yup.string().required("Title is Required"),
        description: yup.string().required("Description is Required"),
        category: yup.string().required("Category is Required"),
    });

    const imgState = useSelector((state) => state.upload.images);
    const brandCatState = useSelector((state) => state.blogCategory.blogCategories);
    const newBlogState = useSelector((state) => state.blog);

    const { isSuccess, isError, isLoading, createdBlog, updatedBlog, blogName, blogCat, blogDesc, blogImgs } = newBlogState;

    useEffect(() => {
        if (blogId !== undefined) {
            dispatch(getABlog(blogId));
        } else {
            dispatch(resetState());
            setImages([]);
        }
    }, [blogId, dispatch]);

    useEffect(() => {
        dispatch(resetState());
        dispatch(getBlogCategories());
    }, [dispatch]);

    useEffect(() => {
        if (isSuccess && createdBlog) {
            toast.success("Blog Added Successfully!");
        }
        if (isSuccess && updatedBlog) {
            toast.success("Blog Updated Successfully!");
            navigate("/admin/blog-list");
        }
        if (isError) {
            toast.error("Something Went Wrong!");
        }
    }, [isSuccess, isError, isLoading, createdBlog, updatedBlog, navigate]);

    useEffect(() => {
        if (blogImgs && blogImgs.length > 0) {
            const initialImages = blogImgs.map((img) => ({
                public_id: img.public_id,
                url: img.url,
            }));
            setImages(initialImages);
        }
    }, [blogImgs]);

    useEffect(() => {
        if (imgState.length > 0) {
            setImages((prevImages) => [
                ...prevImages,
                ...imgState.map((img) => ({
                    public_id: img.public_id,
                    url: img.url,
                })),
            ]);
        }
    }, [imgState]);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: blogName || "",
            description: blogDesc || "",
            category: blogCat || "",
            images: images,
        },
        validationSchema: schema,
        onSubmit: (values) => {
            values.images = images;
            if (blogId !== undefined) {
                const data = { id: blogId, blogData: values };
                dispatch(updateABlog(data));
                dispatch(resetState());
            } else {
                dispatch(createBlog(values));
                formik.resetForm();
                setTimeout(() => {
                    dispatch(resetState());
                }, 1000);
            }
        },
    });

    const handleDeleteImg = (public_id) => {
        dispatch(deleteImg(public_id));
        setImages(images.filter(img => img.public_id !== public_id));
    };

    return (
        <div>
            <h3 className="mb-4 title">{blogId !== undefined ? "Edit" : "Add"} Blog</h3>
            <div>
                <form action="" onSubmit={formik.handleSubmit}>
                    <div className="mt-4">
                        <CustomInput
                            type="text"
                            label="Enter Blog Title"
                            name="title"
                            onChange={formik.handleChange("title")}
                            onBlur={formik.handleBlur("title")}
                            value={formik.values.title}
                        />
                    </div>
                    <div className="error">
                        {formik.touched.title && formik.errors.title}
                    </div>
                    <select
                        name="category"
                        onChange={formik.handleChange("category")}
                        onBlur={formik.handleBlur("category")}
                        value={formik.values.category}
                        className="form-control py-3 mt-3"
                        id=""
                    >
                        <option value="">Select Blog Category</option>
                        {brandCatState.map((i, j) => (
                            <option key={j} value={i.title}>
                                {i.title}
                            </option>
                        ))}
                    </select>
                    <div className="error">
                        {formik.touched.category && formik.errors.category}
                    </div>
                    <ReactQuill
                        className="mt-3"
                        theme="snow"
                        name="description"
                        onChange={formik.handleChange("description")}
                        value={formik.values.description}
                    />
                    <div className="error">
                        {formik.touched.description && formik.errors.description}
                    </div>
                    <div className="bg-white border-1 p-5 text-center mt-3">
                        <Dropzone onDrop={(acceptedFiles) => dispatch(uploadImg(acceptedFiles))}>
                            {({ getRootProps, getInputProps }) => (
                                <section>
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <p>Drag 'n' drop some files here, or click to select files</p>
                                    </div>
                                </section>
                            )}
                        </Dropzone>
                    </div>
                    <div className="showimages d-flex flex-wrap mt-3 gap-3">
                        {images.map((i, j) => (
                            <div className="position-relative" key={j}>
                                <button
                                    type="button"
                                    onClick={() => handleDeleteImg(i.public_id)}
                                    className="btn-close position-absolute"
                                    style={{ top: "10px", right: "10px" }}
                                ></button>
                                <img src={i.url} alt="" width={200} height={200} />
                            </div>
                        ))}
                    </div>
                    <button type='submit' className='btn btn-success border-0 rounded-3 my-5'>{blogId !== undefined ? "Edit" : "Add"} Blog</button>
                </form>
            </div>
        </div>
    );
}

export default AddBlog;
