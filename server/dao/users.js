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

async function getUsername(username) {
    return await db("users").where({
        username: username
    }).select("*")
}

async function getEmail(email) {
    return await db("users").where({
        email: email
    }).select("*")
}

async function getOnlineTag(onlineTag) {
    return await db("users").where({
        online_tag: onlineTag
    }).select("*")
}


module.exports = {
    getUser,
    createUser,
    getUsername,
    getEmail,
    getOnlineTag
}