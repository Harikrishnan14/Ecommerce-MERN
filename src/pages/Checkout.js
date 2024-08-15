import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import Container from '../components/Container';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios';

const Checkout = () => {

    const [totalAmount, setTotalAmount] = useState(0)
    const [shippingInfo, setShippingInfo] = useState(null)

    const cartState = useSelector((state) => state.auth.userCart)

    useEffect(() => {
        let sum = 0
        for (let index = 0; index < cartState?.length; index++) {
            sum = sum + (Number(cartState[index]?.quantity) * cartState[index]?.price)
            setTotalAmount(sum)
        }
    }, [cartState])

    const shippingSchema = yup.object({
        firstName: yup.string().required("First Name is required"),
        lastName: yup.string().required("Last Name is required"),
        address: yup.string().required("Address is required"),
        state: yup.string().required("State is required"),
        city: yup.string().required("City is required"),
        country: yup.string().required("Country is required"),
        pincode: yup.number().required("Zip Code is required"),
        other: yup.string(),
    });

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            address: "",
            state: "",
            city: "",
            country: "",
            pincode: "",
            other: "",
        },
        validationSchema: shippingSchema,
        onSubmit: values => {
            checkoutHandler()
        },
    });

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement("script")
            script.src = src;
            script.onload = () => {
                resolve(true)
            }
            script.onerror = () => {
                resolve(false)
            }
            document.body.appendChild(script)
        })
    }

    const checkoutHandler = async () => {
        const response = await loadScript("https://checkout.razorpay.com/vi/checkout.js")
        if (!response) {
            alert("Razorpay SDK failed to load!")
            return;
        }
        const result = await axios.post("http://localhost:5000/api/user/order/checkout")
        if (!result) {
            alert("Something went wrong")
            return;
        }

        const { amount, id: order_id, currency } = result.data

        const options = {
            key: "rzp_test_FJAogaQsdBhrvo", // Enter the Key ID generated from the Dashboard
            amount: amount.toString(),
            currency: currency,
            name: "ShopNest",
            description: "Test Transaction",
            order_id: order_id,
            handler: async function (response) {
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                };

                const result = await axios.post("http://localhost:5000/api/user/order/payment-verification", data);

                alert(result);
            },
            prefill: {
                name: "ShopNest",
                email: "shopnest@example.com",
                contact: "9999999999",
            },
            notes: {
                address: "ShopNest Corporate Office",
            },
            theme: {
                color: "#61dafb",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

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
                            <form action="" onSubmit={formik.handleSubmit} className='d-flex flex-wrap justify-content-between gap-15'>
                                <div className='w-100'>
                                    <select
                                        name="country"
                                        id=""
                                        value={formik.values.country}
                                        onChange={formik.handleChange("country")}
                                        onBlur={formik.handleBlur("country")}
                                        className='form-control form-select'
                                    >
                                        <option value="" selected disabled>Select Country</option>
                                        <option value="India">India</option>
                                    </select>
                                    <div className="error ms-2 my-1">
                                        {formik.touched.country && formik.errors.country}
                                    </div>
                                </div>
                                <div className='flex-grow-1'>
                                    <input
                                        type="text"
                                        placeholder='First Name'
                                        className='form-control'
                                        value={formik.values.firstName}
                                        onChange={formik.handleChange("firstName")}
                                        onBlur={formik.handleBlur("firstName")}
                                    />
                                    <div className="error ms-2 my-1">
                                        {formik.touched.firstName && formik.errors.firstName}
                                    </div>
                                </div>
                                <div className='flex-grow-1'>
                                    <input
                                        type="text"
                                        placeholder='Last Name'
                                        className='form-control'
                                        value={formik.values.lastName}
                                        onChange={formik.handleChange("lastName")}
                                        onBlur={formik.handleBlur("lastName")}
                                    />
                                    <div className="error ms-2 my-1">
                                        {formik.touched.lastName && formik.errors.lastName}
                                    </div>
                                </div>
                                <div className='w-100'>
                                    <input
                                        type="text"
                                        placeholder='Address'
                                        className='form-control'
                                        value={formik.values.address}
                                        onChange={formik.handleChange("address")}
                                        onBlur={formik.handleBlur("address")}
                                    />
                                    <div className="error ms-2 my-1">
                                        {formik.touched.address && formik.errors.address}
                                    </div>
                                </div>
                                <div className='w-100'>
                                    <input
                                        type="text"
                                        placeholder='Apartment, Suite, etc.'
                                        className='form-control'
                                        value={formik.values.other}
                                        onChange={formik.handleChange("other")}
                                        onBlur={formik.handleBlur("other")}
                                    />
                                    <div className="error ms-2 my-1">
                                        {formik.touched.other && formik.errors.other}
                                    </div>
                                </div>
                                <div className='flex-grow-1'>
                                    <input
                                        type="text"
                                        placeholder='City'
                                        className='form-control'
                                        value={formik.values.city}
                                        onChange={formik.handleChange("city")}
                                        onBlur={formik.handleBlur("city")}
                                    />
                                    <div className="error ms-2 my-1">
                                        {formik.touched.city && formik.errors.city}
                                    </div>
                                </div>
                                <div className='flex-grow-1'>
                                    <select
                                        name="state"
                                        id=""
                                        className='form-control form-select'
                                        value={formik.values.state}
                                        onChange={formik.handleChange("state")}
                                        onBlur={formik.handleBlur("state")}
                                    >
                                        <option value="" selected disabled>Select State</option>
                                        <option value="Kerala">Kerala</option>
                                    </select>
                                    <div className="error ms-2 my-1">
                                        {formik.touched.state && formik.errors.state}
                                    </div>
                                </div>
                                <div className='flex-grow-1'>
                                    <input
                                        type="text"
                                        placeholder='Zip Code'
                                        className='form-control'
                                        value={formik.values.pincode}
                                        onChange={formik.handleChange("pincode")}
                                        onBlur={formik.handleBlur("pincode")}
                                    />
                                    <div className="error ms-2 my-1">
                                        {formik.touched.pincode && formik.errors.pincode}
                                    </div>
                                </div>
                                <div className="w-100 mt-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <Link to='/cart' className='text-dark'>
                                            <IoIosArrowBack className='me-2' />
                                            Return to Cart
                                        </Link>
                                        <Link to='/' className='button'>Continue to shipping</Link>
                                        <button className='button' type='submit'>Place Order</button>
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
