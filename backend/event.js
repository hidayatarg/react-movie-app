const express = require('express');
const authenticate = require('./middleware/authenticate');
let router = express.Router();

// when request come to this function 
// first the authenticate middleware is called
router.post('/', authenticate,(req, res) => {
    res.status(201).json({
        user: req.currentUser,
        success: true
    });
});

module.exports = router;