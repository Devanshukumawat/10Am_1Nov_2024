const routes = require("express").Router()
const UserC = require("../controller/user")


routes.get("/",UserC.homePageController)
routes.post("/insert",UserC.dataInserController)
routes.get('/getdata',UserC.showDataController)




module.exports = routes;