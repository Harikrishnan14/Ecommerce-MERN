import React from 'react'
import MetaTags from '../components/MetaTags'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'

const Login = () => {
    return (
        <div>
            <MetaTags title="Login" />
            <BreadCrumb title="Login" />
            <Container class1='login-wrapper home-wrapper-2 py-5'>
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-4'>Login</h3>
                            <form action="" className='d-flex flex-column gap-15'>
                                <CustomInput type="email" name="email" placeholder="Email" />
                                <CustomInput type="password" name="password" placeholder="Password" />
                                <div>
                                    <Link to='/forgot-password'>Forgot Password?</Link>
                                    <div className='d-flex justify-content-center align-items-center gap-15 mt-3'>
                                        <button className='button border-0'>Login</button>
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
