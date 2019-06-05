const jwt = require('jsonwebtoken');
const { Secret } = require('../config');
const User = require('../models/User');

// for ES6
// import User from '../model/User'

module.exports = (req, res, next) => {
    const authorizationHeader = req.headers['authorization'];
    let token;

    if (authorizationHeader) {
        // from front end it will come as Bearer TTTTOOOKKKEEEN
         token = authorizationHeader.split(' ')[1];
        // for backend
        // token = authorizationHeader;

    }

    if (token) {
        jwt.verify(token, Secret, (err, decode) => {
            if (err) {
                res.status(401).json({
                    error: 'Failed to authenticate'
                });
            } else {
                console.log('decoded Token', decode);
                // if token is valid but user is deleted by admin
                // // or blocked by admin
                // const  User = ({ id: decode.id }).fetch().then(user => {
                //     if (!user) {
                //         res.status(404).json({
                //             eror: 'No such user avaliable'
                //         });
                //     }
                //     // if we have valid user
                //     req.currentUser = user;
                    
                // });
                req.currentUser = decode;

                next();
            }
        });
    } else {
        res.status(403).json({
            error: 'No token provided'
        });
    }
}