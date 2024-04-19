import React from 'react'
import MetaTags from '../components/MetaTags'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div>
            <MetaTags title="Sign Up" />
            <BreadCrumb title="Sign Up" />
            <div className="login-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className='text-center mb-4'>Create Account</h3>
                                <form action="" className='d-flex flex-column gap-15'>
                                    <div>
                                        <input type="text" name="name" placeholder="Name" className="form-control" />
                                    </div>
                                    <div>
                                        <input type="email" name="email" placeholder="Email" className="form-control" />
                                    </div>
                                    <div>
                                        <input type="tel" name="phone" placeholder="Phone Number" className="form-control" />
                                    </div>
                                    <div>
                                        <input type="password" name="password" placeholder="Password" className="form-control" />
                                    </div>
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
                </div>
            </div>
        </div>
    )
}

export default SignUp
