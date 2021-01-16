const express = require('express');
const router = express.Router();
const utils = require('../../config/utils');
const Searching = require('../../models').Searching;


router.post('/', async (req, res, next) => {
    Searching.create(
        req.body
    ).then(data => {
        res.json({ success: true, data: data })
    }).catch(next)
})

router.get('/', async (req, res, next) => {
    Searching.findAll(
    ).then(data => {
        res.json({ success: true, data: data })
    }).catch(next)
})

module.exports = router; 