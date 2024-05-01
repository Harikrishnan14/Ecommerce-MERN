import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import MetaTags from '../components/MetaTags'
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/ProductCard';
import Color from '../components/Color';
import Headphone from '../images/headphone.jpg'
import Grid from '../images/gr.svg'
import Grid2 from '../images/gr2.svg'
import Grid3 from '../images/gr3.svg'
import Grid4 from '../images/gr4.svg'
import Container from '../components/Container';

const Store = () => {

    const [grid, setGrid] = useState(3)

    return (
        <>
            <MetaTags title="Store" />
            <BreadCrumb title="Store" />
            <Container class1='store-wrapper home-wrapper-2 py-5'>
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
                                    <Color />
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
                                        <img src={Headphone} alt="Headphone" className='img-fluid' />
                                    </div>
                                    <div className="w-50">
                                        <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                                        <ReactStars count={5} size={24} value={3} edit={false} activeColor="#ffd700" />
                                        <b>$100.00</b>
                                    </div>
                                </div>
                                <div className="random-products d-flex">
                                    <div className="w-50">
                                        <img src={Headphone} alt="Headphone" className='img-fluid' />
                                    </div>
                                    <div className="w-50">
                                        <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                                        <ReactStars count={5} size={24} value={3} edit={false} activeColor="#ffd700" />
                                        <b>$100.00</b>
                                    </div>
                                </div>
                                <div className="random-products d-flex">
                                    <div className="w-50">
                                        <img src={Headphone} alt="Headphone" className='img-fluid' />
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
                    <div className="col-9">
                        <div className="filter-sort-grid mb-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center gap-10">
                                    <p className="mb-0" style={{ width: "100px" }}>Sort By:</p>
                                    <select name="" id="" className='form-control form-select'>
                                        <option value="manual">Featured</option>
                                        <option value="best-selling">Best Selling</option>
                                        <option value="title-ascending">Alphabetically, A-Z</option>
                                        <option value="title-descending">Alphabetically, Z-A</option>
                                        <option value="price-ascending">Price, low-high</option>
                                        <option value="price-descending">Price, high-low</option>
                                        <option value="created-ascending">Date, old-new</option>
                                        <option value="created-descending">Date, new-old</option>
                                    </select>
                                </div>
                                <div className='d-flex align-items-center gap-10'>
                                    <p className="total-products mb-0">21 Products</p>
                                    <div className="d-flex align-items-center gap-10 grid">
                                        <img src={Grid} alt="grid" className="d-block img-fluid" onClick={() => setGrid(3)} />
                                        <img src={Grid2} alt="grid" className="d-block img-fluid" onClick={() => setGrid(4)} />
                                        <img src={Grid3} alt="grid" className="d-block img-fluid" onClick={() => setGrid(6)} />
                                        <img src={Grid4} alt="grid" className="d-block img-fluid" onClick={() => setGrid(12)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="products-list pb-5">
                            <div className="d-flex gap-10 flex-wrap">
                                <ProductCard grid={grid} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Store
