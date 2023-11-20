const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 8080

//schema
const schemeData = mongoose.Schema({
    name: String,
    email: String,
    mobile: Number,
}, { timestamps: true })

const userModel = mongoose.model("user", schemeData)

//read
app.get("/", async (req, res) => {
    const data = await userModel.find({})
    res.json({ success: true, data: data })
})


//create data //save data in mongodb
app.post("/create", async(req, res) => {
    console.log(req.body)
    const data=new userModel(req.body)
    await data.save()

    res.send({ success: true, message: "data saved successfully" ,data: data})
})


//updata data
app.put("/update", async(req,res)=>{
    console.log(req.body)
    const {id,...rest} = req.body

    console.log(rest)
    const data= await userModel.updateOne({_id: id}, rest)
    res.send({success: true, message:"data updated successfully", data: data})
})

//delete api
app.delete("/delete", async(req,res)=>{
    const id=req.params.id
    console.log(id)
    const data = await userModel.deleteOne({_id:id})
    res.send({success: true, message:"data deleted successfully", data:data})
})


mongoose.connect("mongodb://127.0.0.1:27017/curdoperations")
    .then(() => {
        console.log("connect to DB")
        app.listen(PORT, () => console.log("Server is running"))

    })
    .catch((err) => console.log(err))


