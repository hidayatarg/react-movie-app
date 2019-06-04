const jwt = require('jsonwebtoken');
const { Secret } = require('../config');

// for ES6
// import User from '../model/User'

module.exports = (req, res, next) => {
    const authorizationHeader = req.headers['authorization'];
    let token;
    
    if (authorizationHeader) {
        // from front end it will come as Bearer TTTTOOOKKKEEEN
        // token = authorizationHeader.split(' ')[1];
        // for backend
        token = authorizationHeader;
        
    }

    if (token) {
        jwt.verify(token, Secret, (err, decode) =>{
            if (err) {
                res.status(401).json({
                    error: 'Failed to authenticate'
                });
            } else {
                console.log('decoded Token', decode);

            }
            
        });
    } else {
        res.status(403).json({
            error: 'No token provided'
        });
    }
}