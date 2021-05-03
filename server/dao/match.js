const db = require("../db")

async function createMatch(player, opponent, winner, disconnected, timestamp) {
    const [id] = await db("matches").insert({
        player: player,
        opponent: opponent,
        winner: winner,
        disconnected: disconnected,
        timestamp: timestamp
    }).returning("match_id")

    return id
}

