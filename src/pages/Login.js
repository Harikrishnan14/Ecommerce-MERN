import React from 'react'
import MetaTags from '../components/MetaTags'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { loginUser } from '../features/user/userSlice'

const Login = () => {

    const dispatch = useDispatch()

    const loginSchema = yup.object({
        email: yup.string().required("Email is required").email("Email should be valid"),
        password: yup.string().required("Password is required")
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginSchema,
        onSubmit: values => {
            dispatch(loginUser(values))
        },
    });

    return (
        <div>
            <MetaTags title="Login" />
            <BreadCrumb title="Login" />
            <Container class1='login-wrapper home-wrapper-2 py-5'>
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-4'>Login</h3>
                            <form onSubmit={formik.handleSubmit} action="" className='d-flex flex-column gap-15'>
                                <CustomInput
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    onChange={formik.handleChange("email")}
                                    onBlur={formik.handleBlur("email")}
                                    value={formik.values.email}
                                />
                                <div className="error">
                                    {formik.touched.email && formik.errors.email}
                                </div>
                                <CustomInput
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={formik.handleChange("password")}
                                    onBlur={formik.handleBlur("password")}
                                    value={formik.values.password}
                                />
                                <div className="error">
                                    {formik.touched.password && formik.errors.password}
                                </div>
                                <div>
                                    <Link to='/forgot-password'>Forgot Password?</Link>
                                    <div className='d-flex justify-content-center align-items-center gap-15 mt-3'>
                                        <button className='button border-0' type='submit'>Login</button>
                                        <Link to='/signup' className='button signup'>Sign Up</Link>
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

export default Login
