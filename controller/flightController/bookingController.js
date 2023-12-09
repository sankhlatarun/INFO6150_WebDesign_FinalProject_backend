const {bookingService} = require('../../services/flightServices')

const bookingController = {

    async booking(req, res, next){
        try{
            const booking = await bookingService.addBooking(req.body);
            res.json(booking)
        }
        catch(err){
            next(err);
        }
    },

    async allBookings(req, res, next){
        try{
            const bookings = await bookingService.getBookings(req.params.id);
            res.json(bookings);
        }
        catch(err){
            next(err);
        }
    }
    

}

module.exports = bookingController;