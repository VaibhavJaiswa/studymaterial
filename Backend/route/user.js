const express = require('express')
const controller = require('../controller/userController')



const route = express.Router()

route.post("/feedUser",controller.feedUser)
route.post("/authUser",controller.authUser)
route.post("/getStudyMaterial",controller.getStudyMaterial)
route.post("/updateRT",controller.updateRT)


module.exports = route