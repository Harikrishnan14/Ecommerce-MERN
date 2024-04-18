import React from 'react'
import MetaTags from '../components/MetaTags'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>
            <MetaTags title="Login" />
            <BreadCrumb title="Login" />
            <div className="login-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-4'>Login</h3>
                            <form action="" className='d-flex flex-column gap-15'>
                                <div>
                                    <input type="email" name="email" placeholder="Email" className="form-control" />
                                </div>
                                <div className='mt-2'>
                                    <input type="password" name="password" placeholder="Password" className="form-control" />
                                </div>
                                <div>
                                    <Link to='/forgot-password'>Forgot Password?</Link>
                                </div>
                                <div className='d-flex justify-content-center align-items-center gap-15 mt-3'>
                                    <button className='button border-0'>Login</button>
                                    <Link to='/' className='button signup'>Sign Up</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
