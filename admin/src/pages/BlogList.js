import { Table } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteABlog, getBlogs, resetState } from '../features/blogs/blogSlice';
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';
import CustomModal from '../components/CustomModal';

const BlogList = () => {

    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [blogId, setBlogId] = useState("")

    useEffect(() => {
        dispatch(resetState())
        dispatch(getBlogs())
    }, []);

    useEffect(() => {
        dispatch(getBlogs())
    }, []);

    const blogState = useSelector((state) => state.blog.blogs)

    const columns = [
        {
            title: 'No.',
            dataIndex: 'key',
        },
        {
            title: 'Title',
            dataIndex: 'title',
        },
        {
            title: 'Category',
            dataIndex: 'category',
        },
        {
            title: 'Action',
            dataIndex: 'action',
        },
    ];

    const data1 = [];
    for (let i = 0; i < blogState.length; i++) {
        data1.push({
            key: i + 1,
            title: blogState[i].title,
            category: blogState[i].category,
            action: (
                <>
                    <Link to={`/admin/blog/${blogState[i]._id}`} className='fs-4 text-danger'>
                        <AiOutlineEdit />
                    </Link>
                    <button className='ms-3 fs-4 text-danger bg-transparent border-0' onClick={() => showModal(blogState[i]._id)}>
                        <AiOutlineDelete />
                    </button>
                </>
            ),
        });
    }

    const showModal = (id) => {
        setBlogId(id)
        setOpen(true);
    }

    const hideModal = () => {
        setOpen(false);
    }

    const deleteBlog = (id) => {
        dispatch(deleteABlog(id))
        setOpen(false)
        setTimeout(() => {
            dispatch(getBlogs())
        }, 100);
    }

    return (
        <div>
            <h3 className='mb-4 title'>Blogs List</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
            <CustomModal
                title="Are you sure you want to delete this Blog?"
                open={open}
                hideModal={hideModal}
                performAction={() => deleteBlog(blogId)}
            />
        </div>
    )
}

export default BlogList
