import { Table } from 'antd';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { getProdCategories } from '../features/pCategory/pCategorySlice';
import { Link } from 'react-router-dom';

const CategoryList = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProdCategories())
    }, []);

    const pCategoryState = useSelector((state) => state.prodCategory.prodCategories)

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
    for (let i = 0; i < pCategoryState.length; i++) {
        data1.push({
            key: i + 1,
            name: pCategoryState[i].title,
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
            <h3 className='mb-4 title'>Product Categories</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    )
}

export default CategoryList
