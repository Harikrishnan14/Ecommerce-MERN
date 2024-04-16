import React from 'react'
import MetaTags from '../components/MetaTags'
import BreadCrumb from '../components/BreadCrumb'
import Color from '../components/Color'

const CompareProduct = () => {
    return (
        <div>
            <MetaTags title="Compare Products" />
            <BreadCrumb title="Compare Products" />
            <div className="compare-product-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                    <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                                <div className="product-card-img">
                                    <img src="images/watch.jpg" alt="watch" />
                                </div>
                                <div className="compare-product-details">
                                    <h5 className="title">Lorem ipsum dolor sit, amet consectetur</h5>
                                    <h6 className="price mb-4 mt-3">$100</h6>
                                    <div>
                                        <div className="product-details">
                                            <h5>Brand:</h5>
                                            <p>Havells</p>
                                        </div>
                                        <div className="product-details">
                                            <h5>Type:</h5>
                                            <p>Watch</p>
                                        </div>
                                        <div className="product-details">
                                            <h5>Availability:</h5>
                                            <p>In Stock</p>
                                        </div>
                                        <div className="product-details">
                                            <h5>Color:</h5>
                                            <Color />
                                        </div>
                                        <div className="product-details pb-0">
                                            <h5>Size:</h5>
                                            <div className="d-flex gap-10">
                                                <p>S</p>
                                                <p>M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                                <div className="product-card-img">
                                    <img src="images/watch.jpg" alt="watch" />
                                </div>
                                <div className="compare-product-details">
                                    <h5 className="title">Lorem ipsum dolor sit, amet consectetur</h5>
                                    <h6 className="price mb-4 mt-3">$100</h6>
                                    <div>
                                        <div className="product-details">
                                            <h5>Brand:</h5>
                                            <p>Havells</p>
                                        </div>
                                        <div className="product-details">
                                            <h5>Type:</h5>
                                            <p>Watch</p>
                                        </div>
                                        <div className="product-details">
                                            <h5>Availability:</h5>
                                            <p>In Stock</p>
                                        </div>
                                        <div className="product-details">
                                            <h5>Color:</h5>
                                            <Color />
                                        </div>
                                        <div className="product-details pb-0">
                                            <h5>Size:</h5>
                                            <div className="d-flex gap-10">
                                                <p>S</p>
                                                <p>M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompareProduct
