const matchService = require("../service/match")

function createMatch(req, res) {
    try {
        const id = await matchService.createMatch(req.body)
        res.status(201).json(id)
    } catch (err) {
        console.error(err)
    }
}

function getMatches(req, res) {
    try {
        const id = await matchService.getMatches(req.params.opponent)
        res.status(200).json(id)
    } catch(err) {
        console.err(err)
    }
}

module.exports = { createMatch, getMatches }