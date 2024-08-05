import React, { useEffect } from 'react'
import MetaTags from '../components/MetaTags'
import BreadCrumb from '../components/BreadCrumb'
import { Link, useLocation } from 'react-router-dom'
import { BsArrowLeft } from "react-icons/bs";
import Blog1 from '../images/blog-1.jpg'
import Container from '../components/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getABlog } from '../features/blogs/blogsSlice';

const SingleBlog = () => {

    const dispatch = useDispatch()
    const location = useLocation()

    const blogId = location.pathname.split("/")[2]

    useEffect(() => {
        dispatch(getABlog(blogId))
    }, []);

    const blogState = useSelector((state) => state.blog.singleBlog)

    return (
        <div>
            <MetaTags title="Blog" />
            <BreadCrumb title={`Blog / ${blogState?.title}`} />
            <Container class1='blog-wrapper home-wrapper-2 py-5'>
                <div className="row">
                    <div className="col-12">
                        <div className="single-blog-card">
                            <Link to='/blogs' className='d-flex align-items-center gap-10'>
                                <BsArrowLeft className='fs-5' />
                                Back to Blogs
                            </Link>
                            <h3 className="title">{blogState?.title}</h3>
                            <img src={blogState?.images[0]?.url ? blogState?.images[0]?.url : Blog1} className='img-fluid w-100 my-4' alt="Blog" style={{ height: "400px", objectFit: "cover" }} />
                            <p dangerouslySetInnerHTML={{ __html: blogState?.description }}></p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default SingleBlog
