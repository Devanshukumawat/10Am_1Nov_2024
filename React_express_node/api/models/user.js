const mongoose = require("mongoose")

const {Schema,model} = mongoose



const userSchema = new Schema({
    uName:String
})

const userData = model("userData",userSchema)

module.exports = userData



