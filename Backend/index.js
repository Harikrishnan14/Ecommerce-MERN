const express = require('express')
const DBConnect = require('./config/DBConnect')
const app = express()
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 5000
const authRouter = require('./routes/authRoute')
const bodyParser = require('body-parser')
const { errorHandler, notFound } = require('./middlewares/errorHandler')
const cookieParser = require('cookie-parser')
const productRouter = require('./routes/productRoute')
const blogRouter = require('./routes/blogRoute')
const morgan = require('morgan')

DBConnect()

app.use(morgan("dev"))

app.use(bodyParser.json())

app.use(cookieParser())

app.use('/api/user', authRouter)
app.use('/api/product', productRouter)
app.use('/api/blog', blogRouter)


app.use(errorHandler)
app.use(notFound)


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})