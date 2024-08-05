import React from 'react'
import { Link } from 'react-router-dom'
import Blog1 from '../images/blog-1.jpg'

const BlogCard = (props) => {

    const { id, title, description, date, image } = props;

    const formatDateWithComma = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString('en-GB', { month: 'long' });
        const year = date.getFullYear();
        return `${day} ${month}, ${year}`;
    }

    return (
        <div className="blog-card">
            <div className="card-image" style={{ height: "250px", backgroundColor: "#dbdbdb" }}>
                <img className='img-fluid w-100' src={image} alt="blog" style={{ objectFit: "cover", height: "100%" }} />
            </div>
            <div className="blog-content">
                <p className='date'>{formatDateWithComma(date)}</p>
                <h5 className="title">{title}</h5>
                <p className="desc" dangerouslySetInnerHTML={{
                    __html: description?.length > 70
                        ? description?.substr(0, 70) + "..."
                        : description
                }}></p>
                <Link className='button' to={`/blog/${id}`}>Read More</Link>
            </div>
        </div>
    )
}

export default BlogCard
