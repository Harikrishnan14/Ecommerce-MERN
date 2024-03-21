const Blog = require('../models/blogCategoryModel')
const asyncHandler = require('express-async-handler')
const validateMongoID = require('../utils/validateMongoID')


const createBlog = asyncHandler(async (req, res) => {
    try {
        const newBlog = await Blog.create(req.body)
        res.json(newBlog)
    } catch (error) {
        throw new Error(error)
    }
})

const updateBlog = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoID(id)
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, { new: true })
        res.json(updatedBlog)
    } catch (error) {
        throw new Error(error)
    }
})

const deleteBlog = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoID(id)
    try {
        const deletedBlog = await Blog.findByIdAndDelete(id)
        res.json(deletedBlog)
    } catch (error) {
        throw new Error(error)
    }
})

const getABlog = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoID(id)
    try {
        const blog = await Blog.findById(id)
        res.json(blog)
    } catch (error) {
        throw new Error(error)
    }
})

const getAllBlog = asyncHandler(async (req, res) => {
    try {
        const blogs = await Blog.find()
        res.json(blogs)
    } catch (error) {
        throw new Error(error)
    }
})


module.exports = { createBlog, updateBlog, deleteBlog, getABlog, getAllBlog }