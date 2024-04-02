const Color = require('../models/colorModel')
const asyncHandler = require('express-async-handler')
const validateMongoID = require('../utils/validateMongoID')


const createColor = asyncHandler(async (req, res) => {
    try {
        const newColor = await Color.create(req.body)
        res.json(newColor)
    } catch (error) {
        throw new Error(error)
    }
})

const updateColor = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoID(id)
    try {
        const updatedColor = await Color.findByIdAndUpdate(id, req.body, { new: true })
        res.json(updatedColor)
    } catch (error) {
        throw new Error(error)
    }
})

const deleteColor = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoID(id)
    try {
        const deletedColor = await Color.findByIdAndDelete(id)
        res.json(deletedColor)
    } catch (error) {
        throw new Error(error)
    }
})

const getAColor = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoID(id)
    try {
        const color = await Color.findById(id)
        res.json(color)
    } catch (error) {
        throw new Error(error)
    }
})

const getAllColors = asyncHandler(async (req, res) => {
    try {
        const Colors = await Color.find()
        res.json(Colors)
    } catch (error) {
        throw new Error(error)
    }
})


module.exports = { createColor, updateColor, deleteColor, getAColor, getAllColors }