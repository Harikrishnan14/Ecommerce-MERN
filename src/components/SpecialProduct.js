import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import Watch from '../images/watch.jpg'

const SpecialProduct = (props) => {

    const { image, brand, title, rating, price, quantity, sold } = props

    console.log('qty', quantity, 'sold', sold, 'val', (quantity / (quantity + sold)) * 100);

    return (
        <div className='col-6 mb-3'>
            <div className="special-product-card">
                <div className='d-flex justify-content-between'>
                    <div>
                        <img src={image} alt="Product" className='img-fluid' />
                    </div>
                    <div className='special-product-content'>
                        <h5 className="brand">{brand}</h5>
                        <h6 className="title">{title}</h6>
                        <ReactStars count={5} size={24} value={rating} edit={false} activeColor="#ffd700" />
                        <p className="price">
                            <span className="red-p">${price}</span>&nbsp;
                            {/* <strike>$250</strike> */}
                        </p>
                        <div className="discount-till d-flex align-items-center gap-10">
                            <p className='mb-0'>
                                <b>5 </b>Days
                            </p>
                            <div className="d-flex gap-10 align-items-center">
                                <span className='badge rounded-circle p-2 bg-danger'>4</span>:
                                <span className='badge rounded-circle p-2 bg-danger'>4</span>:
                                <span className='badge rounded-circle p-2 bg-danger'>4</span>
                            </div>
                        </div>
                        <div className="prod-count my-3">
                            <p>Products: {quantity}</p>
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: `${(quantity / (quantity + sold)) * 100}%` }}
                                    aria-valuenow={(quantity / (quantity + sold)) * 100}
                                    aria-valuemin={0}
                                    aria-valuemax={quantity + sold}
                                ></div>
                            </div>
                        </div>
                        <Link className='button'>Add to Cart</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialProduct
