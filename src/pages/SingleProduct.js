import React, { useState } from 'react'
import MetaTags from '../components/MetaTags'
import BreadCrumb from '../components/BreadCrumb'
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";

const SingleProduct = () => {

    const [orderedProduct, setOrderedProduct] = useState(true)

    return (
        <div>
            <MetaTags title="Product Name" />
            <BreadCrumb title="Product Name" />
            <div className="main-product-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6"></div>
                        <div className="col-6"></div>
                    </div>
                </div>
            </div>
            <section className="description-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h4>Description</h4>
                            <div className="description-inner-wrapper">
                                <p className='mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nisi quos eius animi temporibus, totam itaque assumenda sed earum voluptatibus voluptas vitae neque quae modi. Velit, quod. Eveniet, inventore veniam?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="reviews-wrapper home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3>Reviews</h3>
                            <div className="review-inner-wrapper">
                                <div className="review-head d-flex justify-content-between align-items-end">
                                    <div>
                                        <h4 className='mb-2'>Customer Reviews</h4>
                                        <div className='d-flex align-items-center gap-10'>
                                            <ReactStars count={5} size={24} value={3} edit={false} activeColor="#ffd700" />
                                            <p className='mb-0'>Based on 2 reviews</p>
                                        </div>
                                    </div>
                                    {orderedProduct && <div>
                                        <a className='text-dark text-decoration-underline' href="">Write a Review</a>
                                    </div>}
                                </div>
                                <div className="review-form py-4">
                                    <h4>Write A Review</h4>
                                    <form action="" className='d-flex flex-column gap-15'>
                                        <div>
                                            <ReactStars count={5} size={24} value={0} edit={true} activeColor="#ffd700" />
                                        </div>
                                        <div>
                                            <textarea name="" id="" className='w-100 form-control' cols="30" rows="5" placeholder='Write your comments here' style={{ resize: "none" }}></textarea>
                                        </div>
                                        <div className='d-flex justify-content-end'>
                                            <button className='button border-0 mt-3'>Submit Review</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="reviews mt-4">
                                    <div className="review mt-3">
                                        <div className='d-flex align-items-center gap-10'>
                                            <h6 className='mb-0'>Sandeep</h6>
                                            <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700" />
                                        </div>
                                        <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto consequuntur alias doloremque harum suscipit quos illo doloribus rerum, fugiat ipsa reprehenderit pariatur repellendus. Sed dolore ab animi omnis, excepturi necessitatibus!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="popular-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">
                                Our Popular Products
                            </h3>
                        </div>
                    </div>
                    <div className="row">
                        <ProductCard />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SingleProduct
