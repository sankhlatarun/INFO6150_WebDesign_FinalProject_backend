const express = require('express');
const router = express.Router();
const flightController = require('../../controller/flightController/flightController')

router.get('/getFlights', flightController.getFlights)
router.post('/addFlight', flightController.addFlight)
router.patch('/updateFlight/:id', flightController.updateFlight)
router.delete('/deleteFlight/:id', flightController.deleteFlight)


module.exports = router;