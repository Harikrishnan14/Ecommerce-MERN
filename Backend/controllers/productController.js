const Product = require('../models/productsModel')
const asyncHandler = require('express-async-handler')


const createProduct = asyncHandler(async (req, res) => {
    try {
        const newProduct = await Product.create(req.body)
        res.json(newProduct)
    } catch (error) {
        throw new Error(error)
    }
})

const getAProduct = asyncHandler(async (req, res) => {
    const { id } = req.params
    try {
        const findProduct = await Product.findById(id)
        res.json(findProduct)
    } catch (error) {
        throw new Error(error)
    }
})

const getAllProduct = asyncHandler(async (req, res) => {
    try {
        const AllProducts = await Product.find()
        res.json(AllProducts)
    } catch (error) {
        throw new Error(error)
    }
})


module.exports = { createProduct, getAProduct, getAllProduct }