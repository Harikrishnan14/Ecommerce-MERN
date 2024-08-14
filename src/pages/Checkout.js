import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import Container from '../components/Container';
import { useSelector } from 'react-redux';

const Checkout = () => {

    const [totalAmount, setTotalAmount] = useState(0)

    const cartState = useSelector((state) => state.auth.userCart)

    useEffect(() => {
        let sum = 0
        for (let index = 0; index < cartState?.length; index++) {
            sum = sum + (Number(cartState[index]?.quantity) * cartState[index]?.price)
            setTotalAmount(sum)
        }
    }, [cartState])

    return (
        <div>
            <Container class1='checkout-wrapper home-wrapper-2 py-5'>
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
                            {cartState?.map((item, index) => (
                                <div className="d-flex gap-10 align-items-center mb-2" key={index}>
                                    <div className='w-75 d-flex gap-10'>
                                        <div className='w-25 position-relative'>
                                            <span className=' badge bg-secondary text-white rounded-circle p-2 position-absolute' style={{ top: "-10px", right: "-5px" }}>{item?.quantity}</span>
                                            <img src={item?.productID?.images[0]?.url} width={100} height={100} alt="" />
                                        </div>
                                        <div>
                                            <h5 className="total-price">{item?.productID?.title}</h5>
                                            <p className='total-price'>{item?.color?.title}</p>
                                        </div>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <h5 className='total'>${item?.price * item?.quantity}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='border-bottom py-4'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <p className='total'>Subtotal</p>
                                <p className='total-price'>${totalAmount ? totalAmount : 0}</p>
                            </div>
                            <div className='d-flex align-items-center justify-content-between'>
                                <p className='mb-0 total'>Shipping</p>
                                <p className='mb-0 total-price'>$5</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center justify-content-between py-4'>
                            <h4 className='total'>Total</h4>
                            <h5 className='total-price'>${totalAmount ? totalAmount + 5 : 0}</h5>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Checkout
