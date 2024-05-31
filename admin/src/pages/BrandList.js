import { Table } from 'antd';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBrands } from '../features/brand/brandSlice';
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';

const BrandList = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBrands())
    }, []);

    const brandState = useSelector((state) => state.brand.brands)

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
    for (let i = 0; i < brandState.length; i++) {
        data1.push({
            key: i + 1,
            name: brandState[i].title,
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
            <h3 className='mb-4 title'>Brands</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    )
}

export default BrandList
