const db = require("../db")

async function getUser(username, password) {

    const data = await db("users").where({
        username: username,
    })
    .select("username", "password", "online_tag")
    
    return data

}

async function createUser(username, hashedPassword, email, onlineTag) {

    await db("users").insert({
        username: username,
        password: hashedPassword,
        email: email,
        online_tag: onlineTag
    })

    return "Completed"
}

async function createMatch(player, opponent, winner, disconnected, timestamp) {

    await db("matches").insert({
        player: player,
        opponent: opponent,
        winner: winner,
        disconnected: disconnected,
        timestamp: timestamp
    }).returning("match_id")

    return "Completed"

}

async function getMatches(player, opponent) {
    const data = await db("matches").where({
        player: player,
        opponent: opponent
    })
    .select("player", "opponent", "winner", "disconnected")
    
    return data
}

async function getLatestMatch(player, opponent) {
    const data = await db("matches").where({
        player: player,
        opponent: opponent
    }).orderBy("timestamp", "desc").limit(1).select("timestamp")

    return data
}

module.exports = {
    createMatch,
    getMatches,
    getLatestMatch,
    getUser,
    createUser
}