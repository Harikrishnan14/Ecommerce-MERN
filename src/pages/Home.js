import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import MetaTags from '../components/MetaTags';
import MainBanner1 from '../images/main-banner-1.jpg'
import CatBanner1 from '../images/catbanner-01.jpg'
import CatBanner2 from '../images/catbanner-02.jpg'
import CatBanner3 from '../images/catbanner-03.jpg'
import CatBanner4 from '../images/catbanner-04.jpg'
import Service from '../images/service.png'
import Service2 from '../images/service-02.png'
import Service3 from '../images/service-03.png'
import Service4 from '../images/service-04.png'
import Service5 from '../images/service-05.png'
import Camera from '../images/camera.jpg'
import TV from '../images/tv.jpg'
import Headphone from '../images/headphone.jpg'
import Famous1 from '../images/famous-1.webp'
import Famous2 from '../images/famous-2.webp'
import Famous3 from '../images/famous-3.webp'
import Famous4 from '../images/famous-4.webp'
import Brand1 from '../images/brand-01.png'
import Brand2 from '../images/brand-02.png'
import Brand3 from '../images/brand-03.png'
import Brand4 from '../images/brand-04.png'
import Brand5 from '../images/brand-05.png'
import Brand6 from '../images/brand-06.png'
import Brand7 from '../images/brand-07.png'
import Brand8 from '../images/brand-08.png'

const Home = () => {
    return (
        <>
            <MetaTags title="ShopNest" />
            <section className="home-wrapper-1 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-banner position-relative">
                                <img src={MainBanner1} alt="main banner" className='img-fluid rounded-3' />
                                <div className="main-banner-content position-absolute">
                                    <h4>SUPERCHARGED FOR PROS.</h4>
                                    <h5>Galaxy Buds2 Pro</h5>
                                    <p>From $999.00 or $41.62/mo.</p>
                                    <Link className='button' to=''>BUY NOW</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex flex-wrap justify-content-between align-items-center gap-10">
                                <div className="small-banner position-relative">
                                    <img src={CatBanner1} alt="main banner" className='img-fluid rounded-3' />
                                    <div className="small-banner-content position-absolute">
                                        <h4>BEST SALE</h4>
                                        <h5>Laptops Max</h5>
                                        <p>From $1699.00 or<br />$64.62/mo.</p>
                                    </div>
                                </div>
                                <div className="small-banner position-relative">
                                    <img src={CatBanner2} alt="main banner" className='img-fluid rounded-3' />
                                    <div className="small-banner-content position-absolute">
                                        <h4>15% Off</h4>
                                        <h5>Apple Watch 7</h5>
                                        <p>From $999.00 or<br />$41.62/mo.</p>
                                    </div>
                                </div>
                                <div className="small-banner position-relative">
                                    <img src={CatBanner3} alt="main banner" className='img-fluid rounded-3' />
                                    <div className="small-banner-content position-absolute">
                                        <h4>New Arrival</h4>
                                        <h5>Buy iPad Air</h5>
                                        <p>From $999.00 or<br />$41.62/mo.</p>
                                    </div>
                                </div>
                                <div className="small-banner position-relative">
                                    <img src={CatBanner4} alt="main banner" className='img-fluid rounded-3' />
                                    <div className="small-banner-content position-absolute">
                                        <h4>Free Engraving</h4>
                                        <h5>Airpods Max</h5>
                                        <p>From $999.00 or<br />$41.62/mo.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='home-wrapper-2 py-5'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="services d-flex align-items-center justify-content-between">
                                <div className='d-flex align-items-center gap-15'>
                                    <img src={Service} alt="services" />
                                    <div>
                                        <h6 className='mb-0'>Free Shipping</h6>
                                        <p className='mb-0'>From all orders over $100</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <img src={Service2} alt="services" />
                                    <div>
                                        <h6 className='mb-0'>Daily Surprise Offers</h6>
                                        <p className='mb-0'>Save upto 25% off</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <img src={Service3} alt="services" />
                                    <div>
                                        <h6 className='mb-0'>Support 24/7</h6>
                                        <p className='mb-0'>Shop with an expert</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <img src={Service4} alt="services" />
                                    <div>
                                        <h6 className='mb-0'>Affordable Prices</h6>
                                        <p className='mb-0'>Get Factory direct price</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <img src={Service5} alt="services" />
                                    <div>
                                        <h6 className='mb-0'>Secure Payments</h6>
                                        <p className='mb-0'>100% Protected Payments</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                                <div className='d-flex gap align-items-center'>
                                    <div>
                                        <h6>Cameras</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src={Camera} alt="camera" />
                                </div>
                                <div className='d-flex gap align-items-center'>
                                    <div>
                                        <h6>Smart TV</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src={TV} alt="camera" />
                                </div>
                                <div className='d-flex gap align-items-center'>
                                    <div>
                                        <h6>Smart Watches</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src={Headphone} alt="camera" />
                                </div>
                                <div className='d-flex gap align-items-center'>
                                    <div>
                                        <h6>Music & Gaming</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src={Camera} alt="camera" />
                                </div>
                                <div className='d-flex gap align-items-center'>
                                    <div>
                                        <h6>Cameras</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src={Camera} alt="camera" />
                                </div>
                                <div className='d-flex gap align-items-center'>
                                    <div>
                                        <h6>Smart TV</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src={TV} alt="camera" />
                                </div>
                                <div className='d-flex gap align-items-center'>
                                    <div>
                                        <h6>Smart Watches</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src={Headphone} alt="camera" />
                                </div>
                                <div className='d-flex gap align-items-center'>
                                    <div>
                                        <h6>Music & Gaming</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src={Camera} alt="camera" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="featured-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">
                                Featured Collection
                            </h3>
                        </div>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </section>
            <section className="famous-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="famous-card position-relative">
                                <img src={Famous1} alt="famous" className='img-fluid' />
                                <div className="famous-content position-absolute">
                                    <h5 className='text-white'>Big Screen</h5>
                                    <h6 className='text-white'>Smart Watch Series 7</h6>
                                    <p className='text-white'>From $399 or $16.62/mo.*</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="famous-card position-relative">
                                <img src={Famous2} alt="famous" className='img-fluid' />
                                <div className="famous-content position-absolute">
                                    <h5>Studio Display</h5>
                                    <h6>600 nits of brightness.</h6>
                                    <p>27-inch 5K Retina display</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="famous-card position-relative">
                                <img src={Famous3} alt="famous" className='img-fluid' />
                                <div className="famous-content position-absolute">
                                    <h5>smartphones</h5>
                                    <h6>iPhone 13 Pro.</h6>
                                    <p>Now in Green. From $999.00 or $41.62/mo.
                                        for 24 mo. Footnote*</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="famous-card position-relative">
                                <img src={Famous4} alt="famous" className='img-fluid' />
                                <div className="famous-content position-absolute">
                                    <h5>home speakers</h5>
                                    <h6>Room-filling sound.</h6>
                                    <p>From $699 or $116.58/mo. for 12 mo.*</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="special-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">
                                Special Products
                            </h3>
                        </div>
                    </div>
                    <div className="row">
                        <SpecialProduct />
                        <SpecialProduct />
                        <SpecialProduct />
                        <SpecialProduct />
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
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </section>
            <section className="marquee-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="marquee-inner-wrapper card-wrapper">
                                <Marquee className='d-flex'>
                                    <div className='mx-4 w-25'>
                                        <img src={Brand1} alt="brand" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src={Brand2} alt="brand" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src={Brand3} alt="brand" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src={Brand4} alt="brand" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src={Brand5} alt="brand" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src={Brand6} alt="brand" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src={Brand7} alt="brand" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src={Brand8} alt="brand" />
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blog-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">
                                Our Latest Blogs
                            </h3>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <BlogCard />
                            </div>
                            <div className="col-3">
                                <BlogCard />
                            </div>
                            <div className="col-3">
                                <BlogCard />
                            </div>
                            <div className="col-3">
                                <BlogCard />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
