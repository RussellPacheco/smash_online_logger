const express = require("express")
const matchController = require("../controller/match")


const router = express.Router()

router.get("/match/:opponent", matchController.getMatches)


router.post("/match", matchController.createMatch)

module.exports = router;