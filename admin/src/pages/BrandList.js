import { Table } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBrands, resetState, deleteABrand } from '../features/brand/brandSlice';
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';
import CustomModal from '../components/CustomModal';

const BrandList = () => {

    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [brandId, setBrandId] = useState("")

    useEffect(() => {
        dispatch(resetState())
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
                    <Link to={`/admin/brand/${brandState[i]._id}`} className='fs-4 text-danger'>
                        <AiOutlineEdit />
                    </Link>
                    <button className='ms-3 fs-4 text-danger bg-transparent border-0' onClick={() => showModal(brandState[i]._id)}>
                        <AiOutlineDelete />
                    </button>
                </>
            ),
        });
    }

    const showModal = (id) => {
        setBrandId(id)
        setOpen(true);
    }

    const hideModal = () => {
        setOpen(false);
    }

    const deleteBrand = (id) => {
        dispatch(deleteABrand(id))
        setOpen(false)
        setTimeout(() => {
            dispatch(getBrands())
        }, 100);
    }

    return (
        <div>
            <h3 className='mb-4 title'>Brands</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
            <CustomModal
                title="Are you sure you want to delete this Brand?"
                open={open}
                hideModal={hideModal}
                performAction={() => deleteBrand(brandId)}
            />
        </div>
    )
}

export default BrandList
