const express = require('express');
let router = express.Router();


router.post('/', (req, res) => {
    res.status(201).json({
        success: true
    });
});

module.exports = router;