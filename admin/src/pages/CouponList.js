import { Table } from 'antd';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { getCoupons } from '../features/coupon/couponSlice';

const CouponList = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCoupons())
    }, []);

    const couponState = useSelector((state) => state.coupon.coupons)

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
            title: 'Discount',
            dataIndex: 'discount',
            sorter: (a, b) => a.discount - b.discount,
        },
        {
            title: 'Expiry',
            dataIndex: 'expiry',
            sorter: (a, b) => a.name.length - b.name.length,
        },
        {
            title: 'Action',
            dataIndex: 'action',
        },
    ];

    const data1 = [];
    for (let i = 0; i < couponState.length; i++) {
        data1.push({
            key: i + 1,
            name: couponState[i].name,
            discount: couponState[i].discount,
            expiry: new Date(couponState[i].expiry).toLocaleString(),
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
            <h3 className='mb-4 title'>Coupons</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    )
}

export default CouponList
