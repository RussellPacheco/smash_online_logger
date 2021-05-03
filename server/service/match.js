const dao = require("../dao/match")

function createMatch(newMatch) {

    const { player, opponent, winner, disconnected, timestamp } = newMatch

    if (timestamp === undefined) {
        const date = new Date()        
    }

    if (disconnected === undefined) {
        disconnected = "noone"
    }

    dao.createMatch(player, opponent, winner, disconnected, timestamp)
}

function getMatches(newMatch) {
    
}

module.exports = createMatch