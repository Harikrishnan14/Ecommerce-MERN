const Brand = require('../models/brandModel')
const asyncHandler = require('express-async-handler')
const validateMongoID = require('../utils/validateMongoID')


const createBrand = asyncHandler(async (req, res) => {
    try {
        const newBrand = await Brand.create(req.body)
        res.json(newBrand)
    } catch (error) {
        throw new Error(error)
    }
})

const updateBrand = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoID(id)
    try {
        const updatedBrand = await Brand.findByIdAndUpdate(id, req.body, { new: true })
        res.json(updatedBrand)
    } catch (error) {
        throw new Error(error)
    }
})

const deleteBrand = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoID(id)
    try {
        const deletedBrand = await Brand.findByIdAndDelete(id)
        res.json(deletedBrand)
    } catch (error) {
        throw new Error(error)
    }
})

const getABrand = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoID(id)
    try {
        const brand = await Brand.findById(id)
        res.json(brand)
    } catch (error) {
        throw new Error(error)
    }
})

const getAllBrands = asyncHandler(async (req, res) => {
    try {
        const Brands = await Brand.find()
        res.json(Brands)
    } catch (error) {
        throw new Error(error)
    }
})


module.exports = { createBrand, updateBrand, deleteBrand, getABrand, getAllBrands }