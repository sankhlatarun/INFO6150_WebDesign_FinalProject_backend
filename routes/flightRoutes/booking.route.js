const express = require('express');
const router = express.Router();
const bookingController = require('../../controller/flightController/bookingController')

// router.get('/getAirlines', airlineController.getAirlines)
router.post('/flightBooking', bookingController.booking)

module.exports = router;