const express = require('express')
const DBConnect = require('./config/DBConnect')
const app = express()
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 5000
const authRouter = require('./routes/authRoute')
const bodyParser = require('body-parser')

DBConnect()

app.use(bodyParser.json())


app.use('/api/user', authRouter)


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})