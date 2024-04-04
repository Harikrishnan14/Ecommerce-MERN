const Enquiry = require('../models/enqModel')
const asyncHandler = require('express-async-handler')
const validateMongoID = require('../utils/validateMongoID')


const createEnquiry = asyncHandler(async (req, res) => {
    try {
        const newEnquiry = await Enquiry.create(req.body)
        res.json(newEnquiry)
    } catch (error) {
        throw new Error(error)
    }
})

const updateEnquiry = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoID(id)
    try {
        const updatedEnquiry = await Enquiry.findByIdAndUpdate(id, req.body, { new: true })
        res.json(updatedEnquiry)
    } catch (error) {
        throw new Error(error)
    }
})

const deleteEnquiry = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoID(id)
    try {
        const deletedEnquiry = await Enquiry.findByIdAndDelete(id)
        res.json(deletedEnquiry)
    } catch (error) {
        throw new Error(error)
    }
})

const getAnEnquiry = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoID(id)
    try {
        const enquiry = await Enquiry.findById(id)
        res.json(enquiry)
    } catch (error) {
        throw new Error(error)
    }
})

const getAllEnquiries = asyncHandler(async (req, res) => {
    try {
        const enquiries = await Enquiry.find()
        res.json(enquiries)
    } catch (error) {
        throw new Error(error)
    }
})


module.exports = { createEnquiry, updateEnquiry, deleteEnquiry, getAnEnquiry, getAllEnquiries }