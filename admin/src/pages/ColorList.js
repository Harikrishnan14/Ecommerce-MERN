import { Table } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteAColor, getColors, resetState } from '../features/color/colorSlice';
import { Link } from 'react-router-dom';
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import CustomModal from '../components/CustomModal';

const ColorList = () => {

    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [colorId, setColorId] = useState("")

    useEffect(() => {
        dispatch(resetState())
        dispatch(getColors())
    }, []);

    const colorState = useSelector((state) => state.color.colors)

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
            title: 'Action',
            dataIndex: 'action',
        },
    ];
    const data1 = [];
    for (let i = 0; i < colorState.length; i++) {
        data1.push({
            key: i + 1,
            name: colorState[i].title,
            action: (
                <>
                    <Link to={`/admin/color/${colorState[i]._id}`} className='fs-4 text-danger'>
                        <AiOutlineEdit />
                    </Link>
                    <button className='ms-3 fs-4 text-danger bg-transparent border-0' onClick={() => showModal(colorState[i]._id)}>
                        <AiOutlineDelete />
                    </button>
                </>
            ),
        });
    }

    const showModal = (id) => {
        setColorId(id)
        setOpen(true);
    }

    const hideModal = () => {
        setOpen(false);
    }

    const deleteColor = (id) => {
        dispatch(deleteAColor(id))
        setOpen(false)
        setTimeout(() => {
            dispatch(getColors())
        }, 100);
    }

    return (
        <div>
            <h3 className='mb-4 title'>Colors</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
            <CustomModal
                title="Are you sure you want to delete this Color?"
                open={open}
                hideModal={hideModal}
                performAction={() => deleteColor(colorId)}
            />
        </div>
    )
}

export default ColorList
