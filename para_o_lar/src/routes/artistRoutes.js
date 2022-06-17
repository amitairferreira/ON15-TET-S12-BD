const controller = require('../controller/artistController')

const express = require('express')

const router = express.Router()

router.post("/artist/create", controller.createArtist)
router.get("/artistAll", controller.findAllArtist)
router.get("/artist/:id", controller.findById)
router.get("/artistName", controller.findByName)

module.exports = router