const express = require('express');
const router = express.Router();
const bookingController = require('../../controller/flightController/bookingController')

router.get('/getAirlines/:id', bookingController.allBookings)
router.post('/flightBooking', bookingController.booking)

module.exports = router;