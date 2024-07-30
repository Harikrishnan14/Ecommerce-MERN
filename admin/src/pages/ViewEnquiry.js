import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { getAnEnquiry, getEnquiries, resetState, updateAnEnquiry } from '../features/enquiry/enquirySlice'
import { IoArrowBack } from "react-icons/io5";

const ViewEnquiry = () => {

    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const enquiryId = location.pathname.split("/")[3]

    useEffect(() => {
        dispatch(getAnEnquiry(enquiryId))
    }, [enquiryId])

    const enquiryState = useSelector((state) => state.enquiry);

    const { isSuccess, isError, isLoading, enquiryName, enquiryMobile, enquiryEmail, enquiryComment, enquiryStatus } = enquiryState;

    const setEnquiryStatus = (status, id) => {
        const data = { id: id, enquiryData: status }
        dispatch(updateAnEnquiry(data))
        dispatch(resetState())
        setTimeout(() => {
            dispatch(getAnEnquiry(enquiryId))
        }, 100);
    }

    const handleGoBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <div className='d-flex align-items-center justify-content-between'>
                <h3 className="mb-4 title">View Enquiry</h3>
                <button className='d-flex align-items-center mb-0 gap-1 bg-transparent border-0 fs-6' onClick={handleGoBack}>
                    <IoArrowBack className='fs-5' />Go Back
                </button>
            </div>
            <div className="d-flex flex-column gap-3 mt-5 bg-white p-4 rounded-3">
                <div className="d-flex align-items-center gap-3">
                    <h6 className="mb-0">Name :</h6>
                    <p className="mb-0">{enquiryName}</p>
                </div>
                <div className="d-flex align-items-center gap-3">
                    <h6 className="mb-0">Email :</h6>
                    <p className="mb-0"><a href={`mailto:${enquiryEmail}`}>{enquiryEmail}</a></p>
                </div>
                <div className="d-flex align-items-center gap-3">
                    <h6 className="mb-0">Mobile :</h6>
                    <p className="mb-0"><a href={`tel:+91${enquiryMobile}`}>{enquiryMobile}</a></p>
                </div>
                <div className="d-flex align-items-center gap-3">
                    <h6 className="mb-0">Status :</h6>
                    <p className="mb-0">{enquiryStatus}</p>
                </div>
                <div className="d-flex align-items-center gap-3">
                    <h6 className="mb-0">Comment :</h6>
                    <p className="mb-0">{enquiryComment}</p>
                </div>
                <div className="d-flex align-items-center gap-3">
                    <h6 className="mb-0">Change Status :</h6>
                    <div>
                        <select
                            name=""
                            id=""
                            value={enquiryStatus ? enquiryStatus : "Submitted"}
                            className="form-control form-select"
                            onChange={(e) => setEnquiryStatus(e.target.value, enquiryId)}
                        >
                            <option value="Submitted">Submitted</option>
                            <option value="Contacted">Contacted</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Resolved">Resolved</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewEnquiry