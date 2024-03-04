const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

var userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "user"
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
    cart: {
        type: Array,
        default: []
    },
    address: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address"
    }],
    wishlist: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }],
    refreshToken: {
        type: String
    }
},
    { timestamps: true }
);


userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods.isPasswordMatched = async function (enteredPass) {
    return await bcrypt.compare(enteredPass, this.password)
}


module.exports = mongoose.model('User', userSchema);