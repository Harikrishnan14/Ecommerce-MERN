import React, { useEffect, useState } from 'react'
import { Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { deleteAnEnquiry, getEnquiries, resetState } from '../features/enquiry/enquirySlice';
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { Link } from 'react-router-dom';
import CustomModal from '../components/CustomModal';

const Enquiries = () => {

    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [enquiryId, setEnquiryId] = useState("")

    useEffect(() => {
        dispatch(resetState())
        dispatch(getEnquiries())
    }, []);

    const enquiryState = useSelector((state) => state.enquiry.enquiries)

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
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Mobile',
            dataIndex: 'mobile',
        },
        {
            title: 'Status',
            dataIndex: 'status',
        },
        {
            title: 'Action',
            dataIndex: 'action',
        },
    ];

    const data1 = [];
    for (let i = 0; i < enquiryState.length; i++) {
        data1.push({
            key: i + 1,
            name: enquiryState[i].name,
            email: enquiryState[i].email,
            mobile: enquiryState[i].mobile,
            status: (
                <select name='' id='' className='form-control form-select'>
                    <option value="">Set status</option>
                </select>
            ),
            action: (
                <>
                    <Link to="/" className='ms-3 fs-4 text-danger'>
                        <AiOutlineEye />
                    </Link>
                    <button className='ms-3 fs-4 text-danger bg-transparent border-0' onClick={() => showModal(enquiryState[i]._id)}>
                        <AiOutlineDelete />
                    </button>
                </>
            ),
        });
    }

    const showModal = (id) => {
        setEnquiryId(id)
        setOpen(true);
    }

    const hideModal = () => {
        setOpen(false);
    }

    const deleteEnquiry = (id) => {
        dispatch(deleteAnEnquiry(id))
        setOpen(false)
        setTimeout(() => {
            dispatch(getEnquiries())
        }, 100);
    }

    return (
        <div>
            <h3 className='mb-4 title'>Enquiries</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
            <CustomModal
                title="Are you sure you want to delete this Enquiry?"
                open={open}
                hideModal={hideModal}
                performAction={() => deleteEnquiry(enquiryId)}
            />
        </div>
    )
}

export default Enquiries
