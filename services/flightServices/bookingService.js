const {Bookings} = require('../../models/flightModels/flightbookings');


const addBooking = async(args)=>{

    try{
        const booking = new Bookings({
            ...args
        });
    
        await booking.save();
        return booking;
    }catch(err){
        throw err;
    }
}

module.exports = {
    addBooking 
}