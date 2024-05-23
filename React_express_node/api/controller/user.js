const userCollection =  require("../models/user")

exports.homePageController =(req,res)=>{
    res.send("Test")
}


const data = []
exports.dataInserController = async(req,res)=>{
    // data.push(req.body)
    // console.log(req.body)

     const {userName} =req.body
     const record = await  new userCollection({uName:userName})
     await record.save()
    res.send({message:"Succesfully insert data"})
}


exports.showDataController = async(req,res)=>{
    let record = await userCollection.find()
    res.send(record)
}


