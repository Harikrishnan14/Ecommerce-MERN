import React from 'react'
import CustomInput from '../components/CustomInput'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'

const Login = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className='py-5' style={{ background: "#ffd333", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4'>
                <h3 className='text-center title'>Login</h3>
                <p className='text-center'>Login to you account to continue</p>
                <form action="" onSubmit={formik.handleSubmit}>
                    <CustomInput type='text' name="email" val={formik.values.email} label='Email Address' i_id='email' onChange={formik.handleChange('email')} />
                    <CustomInput type='password' name="password" val={formik.values.password} label='Password' i_id='password' onChange={formik.handleChange('password')} />
                    <div className='mb-3 text-end'>
                        <Link to='/forgot-password'>Forgot Password?</Link>
                    </div>
                    <button className='border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5' type='submit' style={{ background: "#ffd333" }}>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
