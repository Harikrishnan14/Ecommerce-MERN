import { Table } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { deleteAProdCategory, getProdCategories, resetState } from '../features/pCategory/pCategorySlice';
import { Link } from 'react-router-dom';
import CustomModal from '../components/CustomModal';

const CategoryList = () => {

    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [categoryId, setCategoryId] = useState("")

    useEffect(() => {
        dispatch(resetState())
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
                    <Link to={`/admin/category/${pCategoryState[i]._id}`} className='fs-4 text-danger'>
                        <AiOutlineEdit />
                    </Link>
                    <button to="/" className='ms-3 fs-4 text-danger bg-transparent border-0' onClick={() => showModal(pCategoryState[i]._id)}>
                        <AiOutlineDelete />
                    </button>
                </>
            ),
        });
    }

    const showModal = (id) => {
        setCategoryId(id)
        setOpen(true);
    }

    const hideModal = () => {
        setOpen(false);
    }

    const deleteProdCategory = (id) => {
        dispatch(deleteAProdCategory(id))
        setOpen(false)
        setTimeout(() => {
            dispatch(getProdCategories())
        }, 100);
    }

    return (
        <div>
            <h3 className='mb-4 title'>Product Categories</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
            <CustomModal
                title="Are you sure you want to delete this Category?"
                open={open}
                hideModal={hideModal}
                performAction={() => deleteProdCategory(categoryId)}
            />
        </div>
    )
}

export default CategoryList
