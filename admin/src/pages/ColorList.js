import { Table } from 'antd';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getColors } from '../features/color/colorSlice';
import { Link } from 'react-router-dom';
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const ColorList = () => {

    const dispatch = useDispatch()

    useEffect(() => {
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
            <h3 className='mb-4 title'>Colors</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    )
}

export default ColorList
