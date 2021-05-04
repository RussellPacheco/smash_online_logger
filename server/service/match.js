const dao = require("../dao/match")


function createMatch(newMatch) {

    const { player, opponent, winner, disconnected="noone", timestamp=new Date() } = newMatch

    return dao.createMatch(player, opponent, winner, disconnected, timestamp)
}

async function getMatches(newMatch) {

    const { player, opponent } = newMatch

    const matches = await dao.getMatches(player, opponent)

    let latestMatch = await dao.getLatestMatch(player, opponent)

    if(latestMatch.length) {
        latestMatch = latestMatch[0].timestamp
    } else {
        latestMatch = "Never Played Before"
    }

    let data = {
        latestMatch: latestMatch,
        totalMatches: matches.length,
        dc: 0,
        wins: 0,
        loss: 0
    }

    matches.forEach(match => {
        if (match.disconnected === opponent) {
            data.dc++
        }
        
        if (match.winner === player) {
            data.wins++
        }

        if (match.winner === opponent) {
            data.loss++
        }        
    });

    return data
    
}

module.exports = { createMatch, getMatches }