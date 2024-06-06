import { Table } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../features/auth/authSlice';
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Orders = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getOrders())
    }, []);

    const orderState = useSelector((state) => state.auth.orders)
    console.log(orderState);

    const columns = [
        {
            title: 'No.',
            dataIndex: 'key',
        },
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Products',
            dataIndex: 'products',
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
            title: 'Payment Method',
            dataIndex: 'method',
        },
        {
            title: 'Action',
            dataIndex: 'action',
        },
    ];

    const data1 = [];
    for (let i = 0; i < orderState.length; i++) {
        data1.push({
            key: i + 1,
            name: orderState[i].orderBy.firstname,
            products: orderState[i].products.map((item, index) => {
                return (
                    <ul key={index}>
                        <li>{item.product.title}</li>
                    </ul>
                )
            }),
            date: new Date(orderState[i].createdAt).toLocaleDateString(),
            amount: orderState[i].paymentIntent.amount,
            method: orderState[i].paymentIntent.status,
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
            <h3 className='mb-4 title'>Orders</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    )
}

export default Orders
