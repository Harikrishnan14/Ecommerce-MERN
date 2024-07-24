import { Table } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteABlogCategory, getBlogCategories, resetState } from '../features/bCategory/bCategorySlice';
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';
import CustomModal from '../components/CustomModal';

const BlogCategoryList = () => {

    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [bCategoryId, setBCategoryId] = useState("")

    useEffect(() => {
        dispatch(resetState())
        dispatch(getBlogCategories())
    }, []);

    const bCategoryState = useSelector((state) => state.blogCategory.blogCategories)

    const columns = [
        {
            title: 'No.',
            dataIndex: 'key',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            sorter: (a, b) => a.name.length - b.name.length,
        },
        {
            title: 'Action',
            dataIndex: 'action',
        },
    ];

    const data1 = [];
    for (let i = 0; i < bCategoryState.length; i++) {
        data1.push({
            key: i + 1,
            name: bCategoryState[i].title,
            action: (
                <>
                    <Link to={`/admin/blog-category/${bCategoryState[i]._id}`} className='fs-4 text-danger'>
                        <AiOutlineEdit />
                    </Link>
                    <button className='ms-3 fs-4 text-danger bg-transparent border-0' onClick={() => showModal(bCategoryState[i]._id)}>
                        <AiOutlineDelete />
                    </button>
                </>
            ),
        });
    }

    const showModal = (id) => {
        setBCategoryId(id)
        setOpen(true);
    }

    const hideModal = () => {
        setOpen(false);
    }

    const deleteBlogCategory = (id) => {
        dispatch(deleteABlogCategory(id))
        setOpen(false)
        setTimeout(() => {
            dispatch(getBlogCategories())
        }, 100);
    }

    return (
        <div>
            <h3 className='mb-4 title'>Blog Categories</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
            <CustomModal
                title="Are you sure you want to delete this Blog Category?"
                open={open}
                hideModal={hideModal}
                performAction={() => deleteBlogCategory(bCategoryId)}
            />
        </div>
    )
}

export default BlogCategoryList
