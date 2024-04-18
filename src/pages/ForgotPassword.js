import React from 'react'
import MetaTags from '../components/MetaTags'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
    return (
        <div>
            <MetaTags title="Forgot Password" />
            <BreadCrumb title="Forgot Password" />
            <div className="login-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className='text-center mb-3'>Reset Your Password</h3>
                                <p className="text-center mt-2 mb-4">We will send you an email to reset your password</p>
                                <form action="" className='d-flex flex-column gap-15'>
                                    <div>
                                        <input type="email" name="email" placeholder="Email" className="form-control" />
                                    </div>
                                    <div className='d-flex justify-content-center flex-column align-items-center gap-15 mt-3'>
                                        <button className='button border-0' type='submit'>Submit</button>
                                        <Link to='/login'>Cancel</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
