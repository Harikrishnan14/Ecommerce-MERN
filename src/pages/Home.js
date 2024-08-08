import React, { useEffect } from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import MetaTags from '../components/MetaTags';
import Container from '../components/Container';
import MainBanner1 from '../images/main-banner-1.jpg'
import CatBanner1 from '../images/catbanner-01.jpg'
import CatBanner2 from '../images/catbanner-02.jpg'
import CatBanner3 from '../images/catbanner-03.jpg'
import CatBanner4 from '../images/catbanner-04.jpg'
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
import Wish from '../images/wish.svg'
import Watch2 from '../images/watch2.avif'
import ProdCompare from '../images/prodcompare.svg'
import View from '../images/view.svg'
import AddToCart from '../images/add-cart.svg'
import { Services } from '../utils/Data';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBlogs } from '../features/blogs/blogsSlice';
import { addToWishlist, getAllProducts } from '../features/products/productsSlice';


const Home = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getAllBlogs())
        dispatch(getAllProducts())
    }, []);

    const blogState = useSelector((state) => state.blog.blogs)
    const productState = useSelector((state) => state.product.products)
    console.log(productState)

    const addToWish = (id) => {
        dispatch(addToWishlist(id))
    }

    return (
        <>
            <MetaTags title="ShopNest" />
            <Container class1='home-wrapper-1 py-5'>
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
            </Container>
            <Container class1='home-wrapper-2 py-5'>
                <div className="row">
                    <div className="col-12">
                        <div className="services d-flex align-items-center justify-content-between">
                            {Services?.map((item, index) => (
                                <div className='d-flex align-items-center gap-15' key={index}>
                                    <img src={item.image} alt="services" />
                                    <div>
                                        <h6 className='mb-0'>{item.title}</h6>
                                        <p className='mb-0'>{item.tagline}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1='home-wrapper-2 py-5'>
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
            </Container>
            <Container class1='featured-wrapper home-wrapper-2 py-5'>
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">
                            Featured Collection
                        </h3>
                    </div>
                    {productState?.filter((item) => item.tags === 'featured')?.map((item, index) => {
                        return (
                            <div className="col-3" key={index}>
                                <div on className="product-card position-relative">
                                    <div className="wishlist-icon position-absolute">
                                        <button className='border-0 bg-transparent' onClick={() => addToWish(item?._id)}>
                                            <img src={Wish} alt="wishlist" />
                                        </button>
                                    </div>
                                    <div className="product-image">
                                        <img src={item?.images[0]?.url} className='img-fluid' alt="product" />
                                        <img src={Watch2} className='img-fluid' alt="product" />
                                    </div>
                                    <div className="product-details">
                                        <h6 className="brand">
                                            {item?.brand}
                                        </h6>
                                        <h5 className="product-title">
                                            {item?.title}
                                        </h5>
                                        <ReactStars count={5} size={24} value={Number(item?.totalrating)} edit={false} activeColor="#ffd700" />
                                        <p className="price">
                                            ${item?.price}
                                        </p>
                                    </div>
                                    <div className="action-bar position-absolute">
                                        <div className="d-flex flex-column gap-15">
                                            <button className='border-0 bg-transparent'>
                                                <img src={ProdCompare} alt="compare" />
                                            </button>
                                            <button onClick={() => navigate(`/product/${item?._id}`)} className='border-0 bg-transparent'>
                                                <img src={View} alt="view" />
                                            </button>
                                            <button className='border-0 bg-transparent'>
                                                <img src={AddToCart} alt="add-to-cart" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Container>
            <Container class1='famous-wrapper home-wrapper-2 py-5'>
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
            </Container>
            <Container class1='special-wrapper home-wrapper-2 py-5'>
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">
                            Special Products
                        </h3>
                    </div>
                </div>
                <div className="row">
                    {productState?.filter(item => item.tags === 'special')?.map((item, index) => (
                        <SpecialProduct
                            key={index}
                            id={item?._id}
                            image={item?.images[0]?.url}
                            brand={item?.brand}
                            title={item?.title}
                            rating={Number(item?.totalrating)}
                            price={item?.price}
                            quantity={item?.quantity}
                            sold={item?.sold}
                        />
                    ))}
                </div>
            </Container>
            <Container class1='popular-wrapper home-wrapper-2 py-5'>
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">
                            Our Popular Products
                        </h3>
                    </div>
                </div>
                <div className="row">
                    {productState?.filter((item) => item.tags === 'popular')?.map((item, index) => {
                        return (
                            <div className="col-3" key={index}>
                                <div className="product-card position-relative">
                                    <div className="wishlist-icon position-absolute">
                                        <button className='border-0 bg-transparent' onClick={() => addToWish(item?._id)}>
                                            <img src={Wish} alt="wishlist" />
                                        </button>
                                    </div>
                                    <div className="product-image">
                                        <img src={item?.images[0]?.url} className='img-fluid' alt="product" />
                                        <img src={Watch2} className='img-fluid' alt="product" />
                                    </div>
                                    <div className="product-details">
                                        <h6 className="brand">
                                            {item?.brand}
                                        </h6>
                                        <h5 className="product-title">
                                            {item?.title}
                                        </h5>
                                        <ReactStars count={5} size={24} value={Number(item?.totalrating)} edit={false} activeColor="#ffd700" />
                                        <p className="price">
                                            ${item?.price}
                                        </p>
                                    </div>
                                    <div className="action-bar position-absolute">
                                        <div className="d-flex flex-column gap-15">
                                            <button className='border-0 bg-transparent'>
                                                <img src={ProdCompare} alt="compare" />
                                            </button>
                                            <button onClick={() => navigate(`product/${item?._id}`)} className='border-0 bg-transparent'>
                                                <img src={View} alt="view" />
                                            </button>
                                            <button className='border-0 bg-transparent'>
                                                <img src={AddToCart} alt="add-to-cart" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Container>
            <Container class1='marquee-wrapper home-wrapper-2 py-5'>
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
            </Container>
            <Container class1='blog-wrapper home-wrapper-2 py-5'>
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">
                            Our Latest Blogs
                        </h3>
                    </div>
                    <div className="row">
                        {blogState?.slice(0, 4)?.map((item, index) => (
                            <div className="col-3" key={index}>
                                <BlogCard
                                    id={item?.id}
                                    title={item?.title}
                                    description={item?.description}
                                    date={item?.createdAt}
                                    image={item?.images[0]?.url}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Home
