const dao = require("../dao/users")
const bcrypt = require("bcrypt")


async function createUser(newUser) {

    const userExists = await detailsExistanceChecker(newUser)

    if (userExists !== "Success") {
        return userExists
    }

    const { username, password, email, onlineTag } = newUser

    const hashedPassword = await bcrypt.hash(password, 10)
    
    return await dao.createUser(username, hashedPassword, email, onlineTag)
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

async function detailsExistanceChecker(detailsToCheck) {
    const { username, password, email, onlineTag } = detailsToCheck

    const usernameCheck = await dao.getUsername(username)

    if (usernameCheck.length) {
        return "Username Exists"
    }

    const emailCheck = await dao.getEmail(email)

    if (emailCheck.length) {
        return "Email Exists"
    }

    const onlineTagCheck = await dao.getOnlineTag(onlineTag)

    if (onlineTagCheck.length) {
        return "Online Tag Exists"
    }
    return "Success"
}

module.exports = { createUser, getUser }