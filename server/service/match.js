const dao = require("../dao/match")

function createMatch(newMatch) {

    let { player, opponent, winner, disconnected, timestamp } = newMatch

    if (timestamp === undefined) {
        timestamp = new Date()        
    }

    if (disconnected === undefined) {
        disconnected = "noone"
    }

    return dao.createMatch(player, opponent, winner, disconnected, timestamp)
}

function getMatches(newMatch) {

    return dao.getMatches(newMatch)
    
}

module.exports = { createMatch, getMatches }