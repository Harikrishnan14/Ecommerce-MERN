import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Wish from '../images/wish.svg'
import Watch from '../images/watch.jpg'
import Watch2 from '../images/watch2.avif'
import ProdCompare from '../images/prodcompare.svg'
import View from '../images/view.svg'
import AddToCart from '../images/add-cart.svg'
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../features/products/productsSlice';

const ProductCard = (props) => {

    const { grid, data } = props

    let location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const addToWish = (id) => {
        dispatch(addToWishlist(id))
    }

    return (
        <>
            {data?.map((item, index) => (
                <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`} key={index}>
                    <div className="product-card position-relative">
                        <div className="wishlist-icon position-absolute">
                            <button className='border-0 bg-transparent' onClick={() => addToWish(item?._id)}>
                                <img src={Wish} alt="wishlist" />
                            </button>
                        </div>
                        <div className="product-image">
                            <img src={item?.images[0]?.url} className='img-fluid' alt="product" />
                            <img src={Watch2} className='img-fluid' alt="product" />
                        </div>
                        <div className="product-details">
                            <h6 className="brand">
                                {item?.brand}
                            </h6>
                            <h5 className="product-title">
                                {item?.title}
                            </h5>
                            <ReactStars count={5} size={24} value={Number(item?.totalrating)} edit={false} activeColor="#ffd700" />
                            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`} dangerouslySetInnerHTML={{ __html: item?.description }}>
                            </p>
                            <p className="price">
                                ${item?.price}
                            </p>
                        </div>
                        <div className="action-bar position-absolute">
                            <div className="d-flex flex-column gap-15">
                                <button className='border-0 bg-transparent'>
                                    <img src={ProdCompare} alt="compare" />
                                </button>
                                <button className='border-0 bg-transparent' onClick={() => navigate(`/product/${item?._id}`)}>
                                    <img src={View} alt="view" />
                                </button>
                                <button className='border-0 bg-transparent'>
                                    <img src={AddToCart} alt="add-to-cart" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ProductCard
