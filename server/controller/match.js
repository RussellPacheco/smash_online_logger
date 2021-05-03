const matchService = require("../service/match")

async function createMatch(req, res) {
    try {
        const id = await matchService.createMatch(req.body)
        res.status(201).json(id)
    } catch (err) {
        console.error(err)
        res.status(500)
    }
}

async function getMatches(req, res) {
    try {
        const data = await matchService.getMatches(req.params.opponent)
        res.status(200).json(data)
    } catch(err) {
        console.err(err)
        res.status(404)
    }
}

module.exports = { createMatch, getMatches }