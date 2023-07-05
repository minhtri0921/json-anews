const express = require('express')
const router = express.Router();

const newsControllers = require('../controllers/NewsController')


router.get('/', newsControllers.getMaincontent)

module.exports = router;