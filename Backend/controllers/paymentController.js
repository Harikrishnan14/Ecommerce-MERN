const Razorpay = require('razorpay')

const instance = new Razorpay({
    key_id: "rzp_test_FJAogaQsdBhrvo", key_secret: "PgD7Sbe8MuLGXWRSs9S8fGrL"
})


const checkout = async (req, res) => {
    const option = {
        amount: 50000,
        currency: "INR"
    }
    const order = await instance.orders.create(option)
    res.json({ success: true, order })
}

const paymentVerification = async (req, res) => {
    const { razorPayOrderId, razorPayPaymentId } = req.body

    res.json({ razorPayOrderId, razorPayPaymentId })
}


module.exports = {
    checkout,
    paymentVerification
}