import { Table } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { getCoupons, deleteACoupon, resetState } from '../features/coupon/couponSlice';
import CustomModal from '../components/CustomModal';

const CouponList = () => {

    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [couponId, setCouponId] = useState("")

    useEffect(() => {
        dispatch(resetState())
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
                    <Link to={`/admin/coupon/${couponState[i]._id}`} className='fs-4 text-danger'>
                        <AiOutlineEdit />
                    </Link>
                    <button className='ms-3 fs-4 text-danger bg-transparent border-0' onClick={() => showModal(couponState[i]._id)}>
                        <AiOutlineDelete />
                    </button>
                </>
            ),
        });
    }

    const showModal = (id) => {
        setCouponId(id)
        setOpen(true);
    }

    const hideModal = () => {
        setOpen(false);
    }

    const deleteCoupon = (id) => {
        dispatch(deleteACoupon(id))
        setOpen(false)
        setTimeout(() => {
            dispatch(getCoupons())
        }, 100);
    }

    return (
        <div>
            <h3 className='mb-4 title'>Coupons</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
            <CustomModal
                title="Are you sure you want to delete this Coupon?"
                open={open}
                hideModal={hideModal}
                performAction={() => deleteCoupon(couponId)}
            />
        </div>
    )
}

export default CouponList
