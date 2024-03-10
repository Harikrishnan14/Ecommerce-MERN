const Product = require('../models/productsModel')
const asyncHandler = require('express-async-handler')
const slugify = require('slugify')


const createProduct = asyncHandler(async (req, res) => {
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title)
        }
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

const updateProduct = asyncHandler(async (req, res) => {
    const { id } = req.params
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title)
        }
        const updatedProduct = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true })
        res.json(updatedProduct)
    } catch (error) {
        throw new Error(error)
    }
})

const deleteProduct = asyncHandler(async (req, res) => {
    const { id } = req.params
    try {
        const deletedProduct = await Product.findByIdAndDelete(id)
        res.json(deletedProduct)
    } catch (error) {
        throw new Error(error)
    }
})


module.exports = { createProduct, getAProduct, getAllProduct, updateProduct, deleteProduct }