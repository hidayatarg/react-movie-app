const jwt = require('jsonwebtoken');
const { Secret } = require('./config')


function tokenCreator(id, username, sessionTime = '24h') {
    const signProperties = {
        username: username,
        
        id: id,
    }
    const options = {
        expiresIn: sessionTime
    }
    return jwt.sign(signProperties, Secret, options);
}

module.exports = {
    tokenCreator
}