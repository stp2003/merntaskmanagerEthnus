const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
app.use(cors())

const PORT = process.env.PORT || 8080

//??
const schemeData = mongoose.Schema({
    name: String,
    email: String,
    mobile: Number,
}, { timestamps: true })

const userModel = mongoose.model("user", schemeData)


app.get("/", (req, res) => {
    res.json({ message: "Server is running curd" })
})

mongoose.connect("mongodb://127.0.0.1:27017/curdoperations")
    .then(() => {
        console.log("connect to DB")
        app.listen(PORT, () => console.log("Server is running"))

    })
    .catch((err) => console.log(err))


