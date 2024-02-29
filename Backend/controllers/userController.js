const { generateToken } = require('../config/JWToken')
const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')


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


module.exports = { registerUser, loginUser }