const express = require('express')
const {homePage} = require('../controllers/home');
const router = express.Router();

router.route('/').get(homePage);


module.exports = router;