let http = require("http")

let fs = require("fs")


fs.writeFileSync("index.html","<h1>Hello Node Class</h1>")

let homeFile = fs.readFileSync("./home.html")
let styleFile = fs.readFileSync('./style.css')
let image = fs.readFileSync("./media/ssr.jpg")



let server = http.createServer((req,res)=>{
    if(req.url=="/"){
        res.write(homeFile)
        res.end()
    }
    else if(req.url == "/style.css"){
        res.write(styleFile)
        res.end()
    }
    else if(req.url=="/media/ssr.jpg"){
        res.write(image)
        res.end()
    }
    else if(req.url=="/about"){
        res.write("About Page")
        res.end()
    }
    else{
        res.write("404 Not Found")
        res.end()
    }
})

server.listen(5000)





