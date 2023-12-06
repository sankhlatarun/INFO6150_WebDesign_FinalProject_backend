const {Flight} = require('../../models/flightModels/flights');

const addFlight = async(args) => {

    try{

        const flight = new Flight({
            ...args
        })        

        await flight.save();

        return flight;

    }catch(err){
        throw err;
    }
}

const getFlights = async() => {

    try{

        const flights = await Flight.find();

        return flights;

    }catch(err){
        throw err;
    }
}

const updateFlight = async(_id, body) => {

    try{

        const flight = await Flight.findOneAndUpdate({_id}, {"$set":body},{new:true});

        return flight;

    }catch(err){
        throw err;
    }
}

const deleteFlight = async(_id) => {

    try{

        const flight = await Flight.findByIdAndDelete(_id);

        return flight;

    }catch(err){
        throw err;
    }
}

module.exports = {
    addFlight,
    getFlights,
    updateFlight,
    deleteFlight
}