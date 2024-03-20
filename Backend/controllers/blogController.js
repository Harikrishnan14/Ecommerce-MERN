const Blog = require('../models/blogModel')
const User = require('../models/userModel')
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

const getBlog = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoID(id)
    try {
        const fetchedBlog = await Blog.findById(id).populate('likes').populate('dislikes')
        await Blog.findByIdAndUpdate(id, { $inc: { numViews: 1 } }, { new: true })
        res.json(fetchedBlog)
    } catch (error) {
        throw new Error(error)
    }
})

const getAllBlogs = asyncHandler(async (req, res) => {
    try {
        const Blogs = await Blog.find()
        res.json(Blogs)
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

const likeBlog = asyncHandler(async (req, res) => {
    const { blogId } = req.body
    validateMongoID(blogId)
    const blog = await Blog.findById(blogId)
    const loginUserId = req?.user?._id
    const isLiked = blog?.isLiked
    const alreadyDisliked = blog?.dislikes?.find((userId) => userId?.toString() === loginUserId.toString())

    if (alreadyDisliked) {
        const blog = await Blog.findByIdAndUpdate(blogId, {
            $pull: { dislikes: loginUserId },
            isDisliked: false
        }, { new: true })
        res.json(blog)
    }

    if (isLiked) {
        const blog = await Blog.findByIdAndUpdate(blogId, {
            $pull: { likes: loginUserId },
            isLiked: false
        }, { new: true })
        res.json(blog)
    } else {
        const blog = await Blog.findByIdAndUpdate(blogId, {
            $push: { likes: loginUserId },
            isLiked: true
        }, { new: true })
        res.json(blog)
    }
})

const dislikeBlog = asyncHandler(async (req, res) => {
    const { blogId } = req.body
    validateMongoID(blogId)
    const blog = await Blog.findById(blogId)
    const loginUserId = req?.user?._id
    const isDisliked = blog?.isDisliked
    const alreadyLiked = blog?.likes?.find((userId) => userId?.toString() === loginUserId.toString())

    if (alreadyLiked) {
        const blog = await Blog.findByIdAndUpdate(blogId, {
            $pull: { likes: loginUserId },
            isLiked: false
        }, { new: true })
        res.json(blog)
    }

    if (isDisliked) {
        const blog = await Blog.findByIdAndUpdate(blogId, {
            $pull: { dislikes: loginUserId },
            isDisliked: false
        }, { new: true })
        res.json(blog)
    } else {
        const blog = await Blog.findByIdAndUpdate(blogId, {
            $push: { dislikes: loginUserId },
            isDisliked: true
        }, { new: true })
        res.json(blog)
    }
})


module.exports = { createBlog, updateBlog, getBlog, getAllBlogs, deleteBlog, likeBlog, dislikeBlog }