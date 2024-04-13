import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import MetaTags from '../components/MetaTags'
import ReactStars from "react-rating-stars-component";

const Store = () => {
    return (
        <>
            <MetaTags title="Store" />
            <BreadCrumb title="Store" />
            <div className="store-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">Shop By Categories</h3>
                                <div>
                                    <ul className='ps-0'>
                                        <li>Watch</li>
                                        <li>TV</li>
                                        <li>Camera</li>
                                        <li>Laptop</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">Filter By</h3>
                                <div>
                                    <h5 className="sub-title">Availability</h5>
                                    <div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" value="" id="" />
                                            <label htmlFor="" className="form-check-label">
                                                In stock (1)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" value="" id="" />
                                            <label htmlFor="" className="form-check-label">
                                                Out of stock (0)
                                            </label>
                                        </div>
                                    </div>
                                    <h5 className="sub-title">Price</h5>
                                    <div className='d-flex align-items-center gap-10'>
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="floatingInput1" placeholder="From" />
                                            <label htmlFor="floatingInput1">From</label>
                                        </div>
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="floatingInput2" placeholder="To" />
                                            <label htmlFor="floatingInput2">To</label>
                                        </div>
                                    </div>
                                    <h5 className="sub-title">Color</h5>
                                    <div>
                                        <ul className='colors ps-0'>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                    <h5 className="sub-title">Size</h5>
                                    <div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" value="" id="size-1" />
                                            <label htmlFor="size-1" className="form-check-label">
                                                S (10)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" value="" id="size-2" />
                                            <label htmlFor="size-2" className="form-check-label">
                                                M (13)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" value="" id="size-3" />
                                            <label htmlFor="size-3" className="form-check-label">
                                                L (10)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" value="" id="size-4" />
                                            <label htmlFor="size-4" className="form-check-label">
                                                XL (5)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" value="" id="size-5" />
                                            <label htmlFor="size-5" className="form-check-label">
                                                XXL (5)
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">Product Tag</h3>
                                <div>
                                    <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Headphone</span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Laptop</span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Mobile</span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Speaker</span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Tablet</span>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">Random Products</h3>
                                <div>
                                    <div className="random-products d-flex">
                                        <div className="w-50">
                                            <img src="images/headphone.jpg" alt="watch" className='img-fluid' />
                                        </div>
                                        <div className="w-50">
                                            <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                                            <ReactStars count={5} size={24} value={3} edit={false} activeColor="#ffd700" />
                                            <b>$100.00</b>
                                        </div>
                                    </div>
                                    <div className="random-products d-flex">
                                        <div className="w-50">
                                            <img src="images/headphone.jpg" alt="watch" className='img-fluid' />
                                        </div>
                                        <div className="w-50">
                                            <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                                            <ReactStars count={5} size={24} value={3} edit={false} activeColor="#ffd700" />
                                            <b>$100.00</b>
                                        </div>
                                    </div>
                                    <div className="random-products d-flex">
                                        <div className="w-50">
                                            <img src="images/headphone.jpg" alt="watch" className='img-fluid' />
                                        </div>
                                        <div className="w-50">
                                            <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                                            <ReactStars count={5} size={24} value={3} edit={false} activeColor="#ffd700" />
                                            <b>$100.00</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Store
