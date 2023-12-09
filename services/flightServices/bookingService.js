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

const getBookings = async(id)=>{
    try{
        const bookings = await Bookings.find({userId:id});
        return bookings;
    }catch(err){
        throw err;
    }
}

module.exports = {
    addBooking,
    getBookings
}