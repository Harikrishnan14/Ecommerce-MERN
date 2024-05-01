import React from 'react'
import MetaTags from '../components/MetaTags'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'

const ForgotPassword = () => {
    return (
        <div>
            <MetaTags title="Forgot Password" />
            <BreadCrumb title="Forgot Password" />
            <Container class1='login-wrapper home-wrapper-2 py-5'>
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-3'>Reset Your Password</h3>
                            <p className="text-center mt-2 mb-4">We will send you an email to reset your password</p>
                            <form action="" className='d-flex flex-column gap-15'>
                                <CustomInput type="email" name="email" placeholder="Email" />
                                <div className='d-flex justify-content-center flex-column align-items-center gap-15 mt-3'>
                                    <button className='button border-0' type='submit'>Submit</button>
                                    <Link to='/login'>Cancel</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ForgotPassword
