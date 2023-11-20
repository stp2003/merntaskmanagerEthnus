const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 8080

//??
const schemeData = mongoose.Schema({
    name: String,
    email: String,
    mobile: Number,
}, { timestamps: true })

const userModel = mongoose.model("user", schemeData)


app.get("/", async (req, res) => {
    const data = await userModel.find({})
    res.json({ success: true, data: data })
})


app.post("/create", async(req, res) => {
    console.log(req.body)
    const data=new userModel(req.body)
    await data.save()
    res.send({ success: true, message: "data saved successfully" })
})


mongoose.connect("mongodb://127.0.0.1:27017/curdoperations")
    .then(() => {
        console.log("connect to DB")
        app.listen(PORT, () => console.log("Server is running"))

    })
    .catch((err) => console.log(err))


