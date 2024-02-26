const express = require('express')
const DBConnect = require('./config/DBConnect')
const app = express()
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 5000

DBConnect()

app.use('/', (req, res) => {
    res.send("Hello")
})


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})