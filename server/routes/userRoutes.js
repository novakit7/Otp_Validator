const express = require('express');

//add furter some routes as required
const router = express.Router()
const {validation}= require('../controllers/validation');
const {signup} = require('../controllers/signup');

// routes end points
router.post('/verify', validation);
router.post('/signup', signup);

module.exports = router;