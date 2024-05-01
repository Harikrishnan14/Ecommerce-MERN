import React from 'react'
import MetaTags from '../components/MetaTags'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'

const ResetPassword = () => {
    return (
        <div>
            <MetaTags title="Reset Password" />
            <BreadCrumb title="Reset Password" />
            <Container class1='login-wrapper home-wrapper-2 py-5'>
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-3'>Reset Your Password</h3>
                            <form action="" className='d-flex flex-column gap-15'>
                                <CustomInput type="password" name="password" placeholder="Enter New Password" />
                                <CustomInput type="password" name="cpassword" placeholder="Confirm Password" />
                                <div className='d-flex justify-content-center flex-column align-items-center gap-15 mt-3'>
                                    <button className='button border-0' type='submit'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ResetPassword
