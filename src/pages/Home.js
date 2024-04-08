import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <section className="home-wrapper-1 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-banner position-relative">
                                <img src="images/main-banner-1.jpg" alt="main banner" className='img-fluid rounded-3' />
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
                                    <img src="images/catbanner-01.jpg" alt="main banner" className='img-fluid rounded-3' />
                                    <div className="small-banner-content position-absolute">
                                        <h4>BEST SALE</h4>
                                        <h5>Laptops Max</h5>
                                        <p>From $1699.00 or<br />$64.62/mo.</p>
                                    </div>
                                </div>
                                <div className="small-banner position-relative">
                                    <img src="images/catbanner-02.jpg" alt="main banner" className='img-fluid rounded-3' />
                                    <div className="small-banner-content position-absolute">
                                        <h4>15% Off</h4>
                                        <h5>Apple Watch 7</h5>
                                        <p>From $999.00 or<br />$41.62/mo.</p>
                                    </div>
                                </div>
                                <div className="small-banner position-relative">
                                    <img src="images/catbanner-03.jpg" alt="main banner" className='img-fluid rounded-3' />
                                    <div className="small-banner-content position-absolute">
                                        <h4>New Arrival</h4>
                                        <h5>Buy iPad Air</h5>
                                        <p>From $999.00 or<br />$41.62/mo.</p>
                                    </div>
                                </div>
                                <div className="small-banner position-relative">
                                    <img src="images/catbanner-04.jpg" alt="main banner" className='img-fluid rounded-3' />
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
        </>
    )
}

export default Home
