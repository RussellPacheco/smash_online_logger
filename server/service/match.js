const dao = require("../dao/match")
const bcrypt = require("bcrypt")

async function createUser(newUser) {
        
    const { username, password, email, onlineTag } = newUser

    const hashedPassword = await bcrypt.hash(password, 10)

    return dao.createUser(username, hashedPassword, email, onlineTag)
}

async function getUser(loginDetails) {
    const { username, password } = loginDetails

    const results = await dao.getUser(username, password)

    if (!results.length) {
        return "User doesn't exist"
    }

    try {
        if (await bcrypt.compare(password, results[0].password)) {
            return results[0].online_tag
        } else {
            return "Username and Password does not match"
        }
    } catch (err) {
        return err        
    }

}

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

module.exports = { createMatch, getMatches, createUser, getUser }