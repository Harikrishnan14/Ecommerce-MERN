import { Table } from 'antd';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBlogCategories } from '../features/bCategory/bCategorySlice';
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';

const BlogCategoryList = () => {

    const dispatch = useDispatch()

    useEffect(() => {
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
                    <Link to="/" className='fs-4 text-danger'>
                        <AiOutlineEdit />
                    </Link>
                    <Link to="/" className='ms-3 fs-4 text-danger'>
                        <AiOutlineDelete />
                    </Link>
                </>
            ),
        });
    }

    return (
        <div>
            <h3 className='mb-4 title'>Blog Categories</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    )
}

export default BlogCategoryList
