const mongoose = require("mongoose")

const {Schema,model} = mongoose



const userSchema = new Schema({
    fisrtName:String,
    lastName:String,
    password:Number
})

const userData = model("Reg",userSchema)

module.exports = userData



