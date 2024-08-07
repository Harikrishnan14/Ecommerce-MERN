import React from 'react'
import MetaTags from '../components/MetaTags'
import BreadCrumb from '../components/BreadCrumb'
import { FaEnvelope, FaHome, FaInfo, FaPhoneAlt } from "react-icons/fa";
import Container from '../components/Container';
import { useDispatch } from 'react-redux';
import * as yup from 'yup'
import { useFormik } from 'formik';
import { postAQuery } from '../features/contact/contactSlice';

const Contact = () => {

    const dispatch = useDispatch()

    const contactSchema = yup.object({
        name: yup.string().required("Name is required"),
        email: yup.string().required("Email is required").email("Invalid Email"),
        mobile: yup.string().required("Phone Number is required"),
        comment: yup.string().required("Comment is required"),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            mobile: '',
            comment: '',
        },
        validationSchema: contactSchema,
        onSubmit: values => {
            dispatch(postAQuery(values))
        },
    });

    return (
        <div>
            <MetaTags title="Contact" />
            <BreadCrumb title="Contact" />
            <Container class1='contact-wrapper home-wrapper-2 py-5'>
                <div className="row">
                    <div className="col-12">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.332179426478!2d-122.01155228864553!3d37.33464377198328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb596e9e188fd%3A0x3b0d8391510688f0!2sApple%20Park!5e0!3m2!1sen!2sin!4v1713112330523!5m2!1sen!2sin" height="450" className='border-0 w-100' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="map"></iframe>
                    </div>
                    <div className="col-12 mt-5">
                        <div className="contact-inner-wrapper d-flex justify-content-between">
                            <div>
                                <h3 className="contact-title mb-4">Contact Us</h3>
                                <form onSubmit={formik.handleSubmit} action='' className='d-flex flex-column gap-15'>
                                    <div>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='Name'
                                            onChange={formik.handleChange("name")}
                                            onBlur={formik.handleBlur("name")}
                                            value={formik.values.name}
                                        />
                                        <div className="error">
                                            {formik.touched.name && formik.errors.name}
                                        </div>
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder='Email'
                                            onChange={formik.handleChange("email")}
                                            onBlur={formik.handleBlur("email")}
                                            value={formik.values.email}
                                        />
                                        <div className="error">
                                            {formik.touched.email && formik.errors.email}
                                        </div>
                                    </div>
                                    <div>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            placeholder='Phone Number'
                                            onChange={formik.handleChange("mobile")}
                                            onBlur={formik.handleBlur("mobile")}
                                            value={formik.values.mobile}
                                        />
                                        <div className="error">
                                            {formik.touched.mobile && formik.errors.mobile}
                                        </div>
                                    </div>
                                    <div>
                                        <textarea
                                            name=""
                                            id=""
                                            className='w-100 form-control'
                                            cols="30"
                                            rows="5"
                                            placeholder='Comments'
                                            style={{ resize: "none" }}
                                            onChange={formik.handleChange("comment")}
                                            onBlur={formik.handleBlur("comment")}
                                            value={formik.values.comment}
                                        >
                                        </textarea>
                                        <div className="error">
                                            {formik.touched.comment && formik.errors.comment}
                                        </div>
                                    </div>
                                    <div>
                                        <button type='submit' className='button border-0 mt-3'>Submit</button>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <h3 className="contact-title mb-4">Get In Touch With Us</h3>
                                <div>
                                    <ul className='ps-0'>
                                        <li className='mb-3 d-flex gap-15 align-items-center'>
                                            <FaHome className='fs-5' />
                                            <address className='mb-0'>
                                                31001 Legros Stream,
                                                South Napoleonhaven,
                                                TN 58747-1565
                                            </address>
                                        </li>
                                        <li className='mb-3 d-flex gap-15 align-items-center'>
                                            <FaPhoneAlt className='fs-5' />
                                            <a href="tel:+91 9533551144">+91 9533551144</a>
                                        </li>
                                        <li className='mb-3 d-flex gap-15 align-items-center'>
                                            <FaEnvelope className='fs-5' />
                                            <a href="mailto:harikrishnankhd@gmail.com">harikrishnankhd@gmail.com</a>
                                        </li>
                                        <li className='mb-3 d-flex gap-15 align-items-center'>
                                            <FaInfo className='fs-5' />
                                            <p className='mb-0'>Monday – Friday 10 AM – 8 PM</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Contact
