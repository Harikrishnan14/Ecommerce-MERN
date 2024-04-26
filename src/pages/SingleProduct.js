import React, { useState } from 'react'
import MetaTags from '../components/MetaTags'
import BreadCrumb from '../components/BreadCrumb'
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color'
import { IoShuffle } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosLink } from "react-icons/io";

const SingleProduct = () => {

    const [orderedProduct, setOrderedProduct] = useState(true);

    const props = {
        width: 400,
        height: 600,
        zoomWidth: 600,
        img: "https://media.wired.com/photos/6511aab1189c419c40374c92/1:1/w_1358,h_1358,c_limit/Apple-Watch-Ultra-2-Alt-Gear.jpg"
    };

    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    }

    return (
        <div>
            <MetaTags title="Product Name" />
            <BreadCrumb title="Product Name" />
            <div className="main-product-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row main-product-inner-wrapper">
                        <div className="col-6">
                            <div className="main-product-image">
                                <div>
                                    <ReactImageZoom {...props} />
                                </div>
                            </div>
                            <div className="other-product-images d-flex justify-content-between flex-wrap gap-15 py-4">
                                <div>
                                    <img src="https://media.wired.com/photos/6511aab1189c419c40374c92/1:1/w_1358,h_1358,c_limit/Apple-Watch-Ultra-2-Alt-Gear.jpg" alt="" className='img-fluid' />
                                </div>
                                <div>
                                    <img src="https://media.wired.com/photos/6511aab1189c419c40374c92/1:1/w_1358,h_1358,c_limit/Apple-Watch-Ultra-2-Alt-Gear.jpg" alt="" className='img-fluid' />
                                </div>
                                <div>
                                    <img src="https://media.wired.com/photos/6511aab1189c419c40374c92/1:1/w_1358,h_1358,c_limit/Apple-Watch-Ultra-2-Alt-Gear.jpg" alt="" className='img-fluid' />
                                </div>
                                <div>
                                    <img src="https://media.wired.com/photos/6511aab1189c419c40374c92/1:1/w_1358,h_1358,c_limit/Apple-Watch-Ultra-2-Alt-Gear.jpg" alt="" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="main-product-details">
                                <div className='border-bottom'>
                                    <h3 className='title'>APPLE Watch Series 2 – 42 Mm Stainless Steel Case</h3>
                                </div>
                                <div className="border-bottom py-3">
                                    <p className="price">$100</p>
                                    <div className='d-flex align-items-center gap-10'>
                                        <ReactStars count={5} size={24} value={3} edit={false} activeColor="#ffd700" />
                                        <p className='mb-0 t-review'>(2 reviews)</p>
                                    </div>
                                    <a className='review-btn' href="#review">Write a Review</a>
                                </div>
                                <div className="border-bottom py-3">
                                    <div className="d-flex align-items-center gap-10 my-2">
                                        <h3 className='product-heading'>Type :</h3>
                                        <p className='product-data'>Watch</p>
                                    </div>
                                    <div className="d-flex align-items-center gap-10 my-2">
                                        <h3 className='product-heading'>Brand :</h3>
                                        <p className='product-data'>Apple</p>
                                    </div>
                                    <div className="d-flex align-items-center gap-10 my-2">
                                        <h3 className='product-heading'>Categories :</h3>
                                        <p className='product-data'>SmartWatch, Watch</p>
                                    </div>
                                    <div className="d-flex align-items-center gap-10 my-2">
                                        <h3 className='product-heading'>Tags :</h3>
                                        <p className='product-data'>Apple, Watch Series 7</p>
                                    </div>
                                    <div className="d-flex align-items-center gap-10 my-2">
                                        <h3 className='product-heading'>Availability :</h3>
                                        <p className='product-data'>In Stock</p>
                                    </div>
                                    <div className="d-flex flex-column gap-10 mt-2 mb-3">
                                        <h3 className='product-heading'>Size :</h3>
                                        <div className="d-flex flex-wrap gap-10">
                                            <span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">M</span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">L</span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">XL</span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">XXL</span>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column gap-10 mt-2 mb-3">
                                        <h3 className='product-heading'>Color :</h3>
                                        <Color />
                                    </div>
                                    <div className="d-flex align-items-center flex-row gap-15 mt-2 mb-3">
                                        <h3 className='product-heading'>Quantity :</h3>
                                        <div className=''>
                                            <input type="number" defaultValue={1} min={1} max={10} style={{ width: "70px" }} className='form-control' />
                                        </div>
                                        <div className='d-flex align-items-center gap-30 ms-5'>
                                            <button className='button border-0'>Add to Cart</button>
                                            <button className='button signup border-0'>Buy Now</button>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-30 pb-3">
                                        <div>
                                            <a href=""><IoShuffle className='fs-5 me-2' /> Add to Compare</a>
                                        </div>
                                        <div>
                                            <a href=""><AiOutlineHeart className='fs-5 me-2' /> Add to Wishlist</a>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column gap-10 mt-5 mb-3">
                                        <h3 className='product-heading'>Shipping & Returns :</h3>
                                        <p className='product-data'>Free shipping and returns available on all orders! <br />
                                            We ship all US domestic orders within <br /> 5-10 business days!</p>
                                    </div>
                                    <div className="d-flex align-items-center gap-15 my-3">
                                        <a href="javascript:void(0)" onClick={() => copyToClipboard("https://media.wired.com/photos/6511aab1189c419c40374c92/1:1/w_1358,h_1358,c_limit/Apple-Watch-Ultra-2-Alt-Gear.jpg")} style={{ backgroundColor: "#c6c6c6", color: "white", padding: "8px", borderRadius: "10px" }} >
                                            <IoIosLink className='fs-6 me-1' />Copy Link
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
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
            <section id='review' className="reviews-wrapper home-wrapper-2">
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
