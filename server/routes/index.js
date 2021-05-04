const express = require("express")
const matchController = require("../controller/match")


const router = express.Router()

router.get("/match/:player/:opponent", matchController.getMatches)

router.post("/match", matchController.createMatch)

router.post("/user/login", matchController.getUser)

router.post("/user", matchController.createUser)

module.exports = router;