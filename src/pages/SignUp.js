import React from 'react'
import MetaTags from '../components/MetaTags'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { registerUser } from '../features/user/userSlice'

const SignUp = () => {

    const dispatch = useDispatch()

    const signUpSchema = yup.object({
        firstname: yup.string().required("First Name is required"),
        lastname: yup.string().default('').required("Last Name is required"),
        email: yup.string().required("Email should be valid").email(),
        mobile: yup.string().required("Mobile Number is required"),
        password: yup.string().required("Password is required")
    });

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            mobile: '',
            password: '',
        },
        validationSchema: signUpSchema,
        onSubmit: values => {
            dispatch(registerUser(values))
        },
    });

    return (
        <div>
            <MetaTags title="Sign Up" />
            <BreadCrumb title="Sign Up" />
            <Container class1='login-wrapper home-wrapper-2 py-5'>
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-4'>Create Account</h3>
                            <form onSubmit={formik.handleSubmit} action="" className='d-flex flex-column gap-15'>
                                <CustomInput
                                    type="text"
                                    name="firstname"
                                    placeholder="First Name"
                                    values={formik.values.firstname}
                                    onChange={formik.handleChange("firstname")}
                                    onBlur={formik.handleBlur("firstname")}
                                />
                                <div className="error">
                                    {formik.touched.firstname && formik.errors.firstname}
                                </div>
                                <CustomInput
                                    type="text"
                                    name="lastname"
                                    placeholder="Last Name"
                                    values={formik.values.lastname}
                                    onChange={formik.handleChange("lastname")}
                                    onBlur={formik.handleBlur("lastname")}
                                />
                                <div className="error">
                                    {formik.touched.lastname && formik.errors.lastname}
                                </div>
                                <CustomInput
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    values={formik.values.email}
                                    onChange={formik.handleChange("email")}
                                    onBlur={formik.handleBlur("email")}
                                />
                                <div className="error">
                                    {formik.touched.email && formik.errors.email}
                                </div>
                                <CustomInput
                                    type="tel"
                                    name="mobile"
                                    placeholder="Phone Number"
                                    values={formik.values.mobile}
                                    onChange={formik.handleChange("mobile")}
                                    onBlur={formik.handleBlur("mobile")}
                                />
                                <div className="error">
                                    {formik.touched.mobile && formik.errors.mobile}
                                </div>
                                <CustomInput
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    values={formik.values.password}
                                    onChange={formik.handleChange("password")}
                                    onBlur={formik.handleBlur("password")}
                                />
                                <div className="error">
                                    {formik.touched.password && formik.errors.password}
                                </div>
                                <div>
                                    <div className='d-flex flex-column justify-content-center align-items-center gap-15 mt-3'>
                                        <button type='submit' className='button border-0'>Sign Up</button>
                                        <Link to='/login'>Already a user? Login</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default SignUp
