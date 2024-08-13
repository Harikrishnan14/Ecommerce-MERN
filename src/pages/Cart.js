import React, { useEffect, useState } from 'react'
import MetaTags from '../components/MetaTags'
import BreadCrumb from '../components/BreadCrumb'
import Watch from '../images/watch.jpg'
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getUserCart, removeFromCart, updateCart } from '../features/user/userSlice';

const Cart = () => {

    const dispatch = useDispatch()
    const [prodUpdateDetails, setProdUpdateDetails] = useState(null)
    const [totalAmount, setTotalAmount] = useState(0)

    useEffect(() => {
        dispatch(getUserCart())
    }, [])

    const cartState = useSelector((state) => state.auth.userCart)

    const deleteFromCart = (id) => {
        dispatch(removeFromCart(id))
        setTimeout(() => {
            dispatch(getUserCart())
        }, 200);
    }

    useEffect(() => {
        if (prodUpdateDetails !== null) {
            dispatch(updateCart({ cartItemId: prodUpdateDetails?.cartItemId, quantity: prodUpdateDetails?.quantity }))
            setTimeout(() => {
                dispatch(getUserCart())
            }, 200);
        }
    }, [prodUpdateDetails])

    useEffect(() => {
        let sum = 0
        for (let index = 0; index < cartState?.length; index++) {
            sum = sum + (Number(cartState[index]?.quantity) * cartState[index]?.price)
            setTotalAmount(sum)
        }
    }, [cartState])


    return (
        <div>
            <MetaTags title="Cart" />
            <BreadCrumb title="Cart" />
            <Container class1='cart-wrapper home-wrapper-2 py-5'>
                <div className="row">
                    <div className="col-12">
                        <div className="cart-header d-flex justify-content-between align-items-center py-3">
                            <h4 className='cart-col-1'>Product</h4>
                            <h4 className='cart-col-2'>Price</h4>
                            <h4 className='cart-col-3'>Quantity</h4>
                            <h4 className='cart-col-4'>Total</h4>
                        </div>

                        {cartState?.map((item, index) => (
                            <div className="cart-data d-flex justify-content-between align-items-center py-3 mb-2" key={index}>
                                <div className='cart-col-1 d-flex align-items-center gap-15'>
                                    <div className='w-25'>
                                        <img src={item?.productID?.images[0]?.url} alt="Product" className='img-fluid' />
                                    </div>
                                    <div className='w-75'>
                                        <p>{item?.productID?.title}</p>
                                        <p className='d-flex gap-2'>Color:
                                            <ul className='colors ps-0 mx-0 my-auto'>
                                                <li style={{ backgroundColor: `${item?.color?.title}`, height: "10px", width: "10px" }}></li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                                <div className='cart-col-2'>
                                    <h5 className="price">${item?.price}</h5>
                                </div>
                                <div className='cart-col-3 d-flex align-items-center gap-15'>
                                    <div>
                                        <input
                                            type="number"
                                            className='form-control'
                                            value={prodUpdateDetails?.quantity ? prodUpdateDetails?.quantity : item?.quantity}
                                            min={1}
                                            max={10}
                                            // defaultValue={1}
                                            onChange={(e) => setProdUpdateDetails({ cartItemId: item?._id, quantity: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <MdDelete className='text-danger fs-4' onClick={() => deleteFromCart(item?._id)} />
                                    </div>
                                </div>
                                <div className='cart-col-4'>
                                    <h5 className="price">${item?.price * item?.quantity}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-12 py-2 mt-4">
                        {(totalAmount !== 0 || totalAmount !== null) && (
                            <div className="d-flex justify-content-between align-items-baseline">
                                <Link to='/store' className='button'>Continue Shopping</Link>
                                <div className='d-flex flex-column align-items-end'>
                                    <h4>Subtotal: ${totalAmount}</h4>
                                    <p>Taxes and shipping calculated at checkout</p>
                                    <Link to='/checkout' className='button'>Checkout</Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Container >
        </div >
    )
}

export default Cart
