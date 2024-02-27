const { default: mongoose } = require("mongoose")

const DBConnect = async () => {
    try {
        const conn = mongoose.connect(process.env.MongoDB_URI)
        console.log("Database connected!");
    } catch (error) {
        console.log("Database Error");
    }
}

module.exports = DBConnect