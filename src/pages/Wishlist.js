import React from 'react'
import MetaTags from '../components/MetaTags'
import BreadCrumb from '../components/BreadCrumb'
import Cross from '../images/cross.svg'
import Watch from '../images/watch.jpg'
import Container from '../components/Container'

const Wishlist = () => {
    return (
        <div>
            <MetaTags title="Wishlist" />
            <BreadCrumb title="Wishlist" />
            <Container class1='wishlist-wrapper home-wrapper-2 py-5'>
                <div className="row">
                    <div className="col-3 mb-3">
                        <div className="wishlist-card position-relative">
                            <img src={Cross} alt="cross" className="position-absolute cross img-fluid" />
                            <div className="wishlist-card-img">
                                <img src={Watch} alt="" className='img-fluid w-100' />
                            </div>
                            <div className="p-3">
                                <h5 className="title mb-3">Lorem ipsum dolor sit, amet consectetur</h5>
                                <h6 className="price">$100</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 mb-3">
                        <div className="wishlist-card position-relative">
                            <img src={Cross} alt="cross" className="position-absolute cross img-fluid" />
                            <div className="wishlist-card-img">
                                <img src={Watch} alt="" className='img-fluid w-100' />
                            </div>
                            <div className="p-3">
                                <h5 className="title mb-3">Lorem ipsum dolor sit, amet consectetur</h5>
                                <h6 className="price">$100</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 mb-3">
                        <div className="wishlist-card position-relative">
                            <img src={Cross} alt="cross" className="position-absolute cross img-fluid" />
                            <div className="wishlist-card-img">
                                <img src={Watch} alt="" className='img-fluid w-100' />
                            </div>
                            <div className="p-3">
                                <h5 className="title mb-3">Lorem ipsum dolor sit, amet consectetur</h5>
                                <h6 className="price">$100</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Wishlist
