const express = require('express')
const router = express.Router()

const roomController = require('./controllers/roomController.js')
const apartmentController = require('./controllers/apartmentController.js')

router.get("/", roomController.showRoom)
router.post("/newRoom", roomController.addRoom)
router.get("/apartment", apartmentController.apartmentDisplay)

module.exports = router