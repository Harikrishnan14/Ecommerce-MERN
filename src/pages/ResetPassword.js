import React from 'react'
import MetaTags from '../components/MetaTags'
import BreadCrumb from '../components/BreadCrumb'

const ResetPassword = () => {
    return (
        <div>
            <MetaTags title="Reset Password" />
            <BreadCrumb title="Reset Password" />
            <div className="login-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className='text-center mb-3'>Reset Your Password</h3>
                                <form action="" className='d-flex flex-column gap-15'>
                                    <div>
                                        <input type="password" name="password" placeholder="Enter New Password" className="form-control" />
                                    </div>
                                    <div>
                                        <input type="password" name="cpassword" placeholder="Confirm Password" className="form-control" />
                                    </div>
                                    <div className='d-flex justify-content-center flex-column align-items-center gap-15 mt-3'>
                                        <button className='button border-0' type='submit'>Submit</button>
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

export default ResetPassword
