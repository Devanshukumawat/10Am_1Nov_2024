const router = require("express").Router()



router.get("/",(req,res)=>{
    res.render('../views/index.ejs')
})


router.get("/about",(req,res)=>{
    res.send("About page")
})


// router.get("/url",(req,res)=>{
    
//     let data = req.query
//     console.log(data)

//     let cStatus= false

//     if(cStatus){
//         res.status(200).send(data)
//     }else{
//         res.status(404).send("Error")
//     }
    
// })


let data = [
    {
        id:"1",
        productName : "Iphone",
        productPrice:"$56"
    },
    {
        id:"2",
        productName : "Samsung",
        productPrice:"$566"
    },
    {
        id:"3",
        productName : "Mi",
        productPrice:"$86"
    }
]

router.get("/data",(req,res)=>{
    res.send(data)
})


router.get("/data/:id",(req,res)=>{
    const user =req.params.id
    let userData = data.find((value)=>value.id===user)
    

    if(userData){
        res.status(200).send(userData)
    }else{
        res.status(404).send("404 not found")
    }
})



router.post('/body',(req,res)=>{
    console.log(req.body)
    res.send("Form")
})








module.exports = router