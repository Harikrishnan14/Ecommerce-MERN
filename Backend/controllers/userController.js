const { generateToken } = require('../config/JWToken')
const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')
const validateMongoID = require('../utils/validateMongoID')
const { generateRefreshToken } = require('../config/refreshToken')
const jwt = require('jsonwebtoken')


const registerUser = asyncHandler(async (req, res) => {
    const email = req.body.email
    const findUser = await User.findOne({ email })
    if (!findUser) {
        const newUser = await User.create(req.body)
        res.json(newUser)
    } else {
        throw new Error("User already exists")
    }
})

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const findUser = await User.findOne({ email })
    if (findUser && await findUser.isPasswordMatched(password)) {
        const refreshToken = await generateRefreshToken(findUser?.id)
        const updateUser = await User.findByIdAndUpdate(findUser.id, {
            refreshToken: refreshToken
        }, { new: true })
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            maxAge: 72 * 60 * 60 * 1000
        })
        res.json({
            _id: findUser?._id,
            firstname: findUser?.firstname,
            lastname: findUser?.lastname,
            email: findUser?.email,
            mobile: findUser?.mobile,
            token: generateToken(findUser?._id)
        })
    } else {
        throw new Error("Invalid Credentials")
    }
})

const handleRefreshToken = asyncHandler(async (req, res) => {
    const cookie = req.cookies
    if (!cookie?.refreshToken) {
        throw new Error("No Refresh Token in Cookies")
    }
    const refreshToken = cookie.refreshToken
    const user = await User.findOne({ refreshToken })
    if (!user) {
        throw new Error("Refresh Token not Matched/Not present in DB")
    }
    jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
        if (err || user.id !== decoded.id) {
            throw new Error("Something wrong with Refresh Token")
        }
        const accessToken = generateToken(user?._id)
        res.json({ accessToken })
    })
})

const logout = asyncHandler(async (req, res) => {
    const cookie = req.cookies
    if (!cookie?.refreshToken) {
        throw new Error("No Refresh Token in Cookies")
    }
    const refreshToken = cookie.refreshToken
    const user = await User.findOne({ refreshToken })
    if (!user) {
        res.clearCookie("refreshToken", {
            httpOnly: true,
            secure: true,
        });
        return res.sendStatus(204);
    }
    await User.findOneAndUpdate({ refreshToken }, {
        refreshToken: "",
    });
    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: true,
    });
    res.sendStatus(204);
})

const getAllUsers = asyncHandler(async (req, res) => {
    try {
        const getUsers = await User.find()
        res.json(getUsers)
    } catch (error) {
        throw new Error(error)
    }
})

const getUser = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoID(id)
    try {
        const getUser = await User.findById(id)
        res.json(getUser)
    } catch (error) {
        throw new Error(error)
    }
})

const deleteUser = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoID(id)
    try {
        const deleteUser = await User.findByIdAndDelete(id)
        res.json(deleteUser)
    } catch (error) {
        throw new Error(error)
    }
})

const updateUser = asyncHandler(async (req, res) => {
    const { _id } = req.user
    validateMongoID(_id)
    try {
        const updatedUser = await User.findByIdAndUpdate(_id, {
            firstname: req?.body?.firstname,
            lastname: req?.body?.lastname,
            email: req?.body?.email,
            mobile: req?.body?.mobile
        }, { new: true })
        res.json(updatedUser)
    } catch (error) {
        throw new Error(error)
    }
})

const blockUser = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoID(id)
    try {
        const block = await User.findByIdAndUpdate(id,
            { isBlocked: true },
            { new: true }
        )
        res.json({ message: "User Blocked" })
    } catch (error) {
        throw new Error(error)
    }
})

const unblockUser = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoID(id)
    try {
        const unblock = await User.findByIdAndUpdate(id,
            { isBlocked: false },
            { new: true }
        )
        res.json({ message: "User UnBlocked" })
    } catch (error) {
        throw new Error(error)
    }
})


module.exports = {
    registerUser,
    loginUser,
    getAllUsers,
    getUser,
    deleteUser,
    updateUser,
    blockUser,
    unblockUser,
    handleRefreshToken,
    logout
}