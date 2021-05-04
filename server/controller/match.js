const matchService = require("../service/match")

async function createMatch(req, res) {
    try {
        const data = await matchService.createMatch(req.body)
        res.status(201).json(data)
    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }
}

async function getMatches(req, res) {
    try {
        const data = await matchService.getMatches(req.params)
        res.status(200).json(data)
    } catch(err) {
        console.error(err)
        res.status(404).json(err)
    }
}

async function createUser(req, res) {
    try {
        const data = await matchService.createUser(req.body)
        res.status(201).json(data)
    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }
}

async function getUser(req, res) {
    try {
        const data = await matchService.getUser(req.body)
        res.status(201).json(data)
    } catch (err) {
        console.error(err)
        res.status(500).send()
    }
}

module.exports = { createMatch, getMatches, createUser, getUser }