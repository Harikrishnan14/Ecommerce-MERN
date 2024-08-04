import React, { useEffect } from 'react'
import MetaTags from '../components/MetaTags'
import BreadCrumb from '../components/BreadCrumb'
import Cross from '../images/cross.svg'
import Watch from '../images/watch.jpg'
import Container from '../components/Container'
import { useDispatch, useSelector } from 'react-redux';
import { getUserProdWishlist } from '../features/user/userSlice'
import { addToWishlist } from '../features/products/productsSlice'

const Wishlist = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserProdWishlist())
    }, []);

    const wishlistState = useSelector((state) => state.auth?.wishlist?.wishlist)

    const removeFromWishlist = (id) => {
        dispatch(addToWishlist(id))
        setTimeout(() => {
            dispatch(getUserProdWishlist())
        }, 100)
    }

    return (
        <div>
            <MetaTags title="Wishlist" />
            <BreadCrumb title="Wishlist" />
            <Container class1='wishlist-wrapper home-wrapper-2 py-5'>
                <div className="row">
                    {wishlistState?.length < 0 ? (
                        wishlistState?.map((item, index) => (
                            <div className="col-3 mb-3" key={index}>
                                <div className="wishlist-card position-relative">
                                    <img src={Cross} alt="cross" className="position-absolute cross img-fluid" onClick={() => removeFromWishlist(item?._id)} />
                                    <div className="wishlist-card-img bg-white">
                                        <img src={item?.images[0]?.url ? item?.images[0]?.url : Watch} alt="" className='d-block mx-auto img-fluid' width={250} />
                                    </div>
                                    <div className="p-3">
                                        <h5 className="title mb-3">{item?.title}</h5>
                                        <h6 className="price">${item?.price}</h6>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className='text-center fs-5'>No Data</div>
                    )}
                </div>
            </Container>
        </div>
    )
}

export default Wishlist
