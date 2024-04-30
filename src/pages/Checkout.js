import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import Watch from '../images/watch.jpg'

const Checkout = () => {
    return (
        <div>
            <div className="checkout-wrapper home-wrapper-2 py-5">
                <div className="container xxl">
                    <div className="row">
                        <div className="col-7">
                            <div className="checkout-left-data">
                                <h3 className="webiste-name">ShopNest</h3>
                                <nav style={{ "--bs-breadcrumb-divider": '>' }} aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/cart" className='text-dark'>Cart</Link>
                                        </li>
                                        &nbsp; /
                                        <li className="breadcrumb-item total-price active" aria-current="page">
                                            Information
                                        </li>
                                        &nbsp; /
                                        <li className="breadcrumb-item total-price active">
                                            Shipping
                                        </li>
                                        &nbsp; /
                                        <li className="breadcrumb-item total-price active" aria-current="page">
                                            Payment
                                        </li>
                                    </ol>
                                </nav>
                                <h4 className="title total">Contact Information</h4>
                                <p className="user-details total">Test User (testuser@gmail.com)</p>
                                <h4 className='mb-3'>Shipping Address</h4>
                                <form action="" className='d-flex flex-wrap justify-content-between gap-15'>
                                    <div className='w-100'>
                                        <select name="" id="" className='form-control form-select'>
                                            <option value="" selected disabled>Select Country</option>
                                        </select>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type="text" placeholder='First Name' className='form-control' />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type="text" placeholder='Last Name' className='form-control' />
                                    </div>
                                    <div className='w-100'>
                                        <input type="text" placeholder='Address' className='form-control' />
                                    </div>
                                    <div className='w-100'>
                                        <input type="text" placeholder='Apartment, Suite, etc.' className='form-control' />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type="text" placeholder='City' className='form-control' />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <select name="" id="" className='form-control form-select'>
                                            <option value="" selected disabled>Select State</option>
                                        </select>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type="text" placeholder='Zip Code' className='form-control' />
                                    </div>
                                    <div className="w-100 mt-3">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <Link to='/cart' className='text-dark'>
                                                <IoIosArrowBack className='me-2' />
                                                Return to Cart
                                            </Link>
                                            <Link to='/' className='button'>Continue to shipping</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className='border-bottom py-4'>
                                <div className="d-flex gap-10 align-items-center mb-2">
                                    <div className='w-75 d-flex gap-10'>
                                        <div className='w-25 position-relative'>
                                            <span className=' badge bg-secondary text-white rounded-circle p-2 position-absolute' style={{ top: "-10px", right: "-5px" }}>1</span>
                                            <img src={Watch} alt="" className='img-fluid' />
                                        </div>
                                        <div>
                                            <h5 className="total-price">Watch series 7</h5>
                                            <p className='total-price'>Sample desc</p>
                                        </div>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <h5 className='total'>$100</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='border-bottom py-4'>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <p className='total'>Subtotal</p>
                                    <p className='total-price'>$399</p>
                                </div>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <p className='mb-0 total'>Shipping</p>
                                    <p className='mb-0 total-price'>$19</p>
                                </div>
                            </div>
                            <div className='d-flex align-items-center justify-content-between py-4'>
                                <h4 className='total'>Total</h4>
                                <h5 className='total-price'>$418</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
