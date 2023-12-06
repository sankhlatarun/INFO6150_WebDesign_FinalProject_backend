const express = require('express');
const router = express.Router();

const HotelController = require('../../controller/hotelController')

router.get('/getHotels', HotelController.getAllHotels)
router.post('/addHotel', HotelController.addHotel)
router.patch('/updateHotel/:id', HotelController.updateHotel)
router.delete('/deleteHotel/:id', HotelController.removeHotel)
router.put('/updateHotel/:id', HotelController.updateHotel);

router.post('/hotelBooking', HotelController.bookHotel);

module.exports = router;