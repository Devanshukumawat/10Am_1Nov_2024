const express = require ("express")
const server = express()
const apiRouter = require("./routes/api")
const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/learn_db").then(()=>{
    console.log("Successfully db Connected")
}).catch((error)=>{
    console.log(error)
})





server.use(express.json())
server.use("/api",apiRouter)
const port = 5000
server.listen(port,()=>{
    console.log(`Running Port ${port}`)
})