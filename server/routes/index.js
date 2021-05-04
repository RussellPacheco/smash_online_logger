const express = require("express")
const matchController = require("../controller/match")
const userController = require("../controller/users")


const router = express.Router()

router.get("/match/:player/:opponent", matchController.getMatches)

router.post("/match", matchController.createMatch)

router.post("/user/login", userController.getUser)

router.post("/user", userController.createUser)

module.exports = router;