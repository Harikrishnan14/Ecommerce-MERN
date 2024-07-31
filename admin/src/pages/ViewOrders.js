import { Table } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOrderByUser } from '../features/auth/authSlice';
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Link, useLocation } from 'react-router-dom';

const ViewOrders = () => {

    const dispatch = useDispatch()
    const location = useLocation()

    const userId = location.pathname.split("/")[3]

    useEffect(() => {
        dispatch(getOrderByUser(userId))
    }, []);

    const orderState = useSelector((state) => state.auth?.userOrders?.products)
    console.log(orderState);

    const columns = [
        {
            title: 'No.',
            dataIndex: 'key',
        },
        {
            title: 'Product Name',
            dataIndex: 'name',
        },
        {
            title: 'Brand',
            dataIndex: 'brand',
        },
        {
            title: 'Color',
            dataIndex: 'color',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
        },
        {
            title: 'Order Date',
            dataIndex: 'date',
        },
        {
            title: 'Total Amount',
            dataIndex: 'amount',
        },
        {
            title: 'Action',
            dataIndex: 'action',
        },
    ];

    const data1 = [];
    for (let i = 0; i < orderState?.length; i++) {
        data1.push({
            key: i + 1,
            name: orderState[i].product.title,
            brand: orderState[i].product.brand,
            color: orderState[i].color,
            quantity: orderState[i].count,
            date: new Date(orderState[i].product.createdAt).toLocaleDateString(),
            amount: (orderState[i].count * orderState[i].product.price),
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
            <h3 className='mb-4 title'>View Orders</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    )
}

export default ViewOrders