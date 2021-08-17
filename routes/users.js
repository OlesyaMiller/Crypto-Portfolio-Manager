const express = require('express');
const router = express.Router();

// @route   POST    api/users
// @desc    Pegister a user
// @accsess Public
router.post('/', (req, res) => {
    res.send('Register a user');
});

module.exports = router;