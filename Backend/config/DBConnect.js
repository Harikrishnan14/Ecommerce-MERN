const { default: mongoose } = require("mongoose")

const DBConnect = async () => {
    try {
        const conn = mongoose.connect('mongodb://127.0.0.1:27017/ShopNest')
        console.log("Database connected!");
    } catch (error) {
        console.log("Database Error");
    }
}

module.exports = DBConnect