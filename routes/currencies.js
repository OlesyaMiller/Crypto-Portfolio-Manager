const express = require('express');
const router = express.Router();

// @route   GET    api/currencies
// @desc    Get all currencies
// @accsess Private
router.get('/', (req, res) => {
    res.send('Get all contacts');
});

// @route   POST    api/currencies
// @desc    Add new currency
// @accsess Private
router.post('/', (req, res) => {
    res.send('Add currency');
});

// @route   PUT    api/currencies/:id
// @desc    Update currency
// @accsess Private
router.put('/:id', (req, res) => {
    res.send('Update currency');
});

// @route   DELETE    api/currencies/:id
// @desc    Delete currency
// @accsess Private
router.delete('/', (req, res) => {
    res.send('Delete currency');
});

module.exports = router;