const express = require('express');
const router = express.Router();
const airlineController = require('../../controller/flightController/airlineController')

router.get('/getAirlines', airlineController.getAirlines)
router.post('/addAirline', airlineController.addAirline)

module.exports = router;