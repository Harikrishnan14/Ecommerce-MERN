import React, { useEffect } from 'react'
import MetaTags from '../components/MetaTags'
import BreadCrumb from '../components/BreadCrumb'
import BlogCard from '../components/BlogCard'
import Container from '../components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBlogs } from '../features/blogs/blogsSlice'

const Blog = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllBlogs())
    }, []);

    const blogState = useSelector((state) => state.blog.blogs)

    return (
        <div>
            <MetaTags title="Blogs" />
            <BreadCrumb title="Blogs" />
            <Container class1='blog-wrapper home-wrapper-2 py-5'>
                <div className="row">
                    <div className="col-3">
                        <div className='filter-card mb-3'>
                            <h3 className="filter-title">Find By Categories</h3>
                            <div>
                                <ul className='ps-0'>
                                    <li>Watch</li>
                                    <li>TV</li>
                                    <li>Camera</li>
                                    <li>Laptop</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="row">
                            {blogState?.map((item, index) => (
                                <div className="div col-6 mb-4" key={index}>
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
                </div>
            </Container>
        </div>
    )
}

export default Blog
