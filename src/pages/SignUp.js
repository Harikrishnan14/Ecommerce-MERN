import React from 'react'
import MetaTags from '../components/MetaTags'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'

const SignUp = () => {
    return (
        <div>
            <MetaTags title="Sign Up" />
            <BreadCrumb title="Sign Up" />
            <Container class1='login-wrapper home-wrapper-2 py-5'>
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-4'>Create Account</h3>
                            <form action="" className='d-flex flex-column gap-15'>
                                <CustomInput type="text" name="name" placeholder="Name" />
                                <CustomInput type="email" name="email" placeholder="Email" />
                                <CustomInput type="tel" name="phone" placeholder="Phone Number" />
                                <CustomInput type="password" name="password" placeholder="Password" />
                                <div>
                                    <div className='d-flex flex-column justify-content-center align-items-center gap-15 mt-3'>
                                        <button className='button border-0'>Sign Up</button>
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
