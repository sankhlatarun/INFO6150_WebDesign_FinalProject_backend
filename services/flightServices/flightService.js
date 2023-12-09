const httpStatus = require("http-status");
const {ApiError} = require('../../middlewares/handleError');
const {Flight} = require('../../models/flightModels/flights');
const moment = require('moment');

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
        if(!flights) throw new ApiError(httpStatus.NOT_FOUND, "No flights found");

        return flights;

    }catch(err){
        throw err;
    }
}

const updateFlight = async(_id, body) => {

    try{

        const flight = await Flight.findOneAndUpdate({_id}, {"$set":body},{new:true});
        if(!flight) throw new ApiError(httpStatus.NOT_FOUND, "No such flights found");

        return flight;

    }catch(err){
        throw err;
    }
}

const deleteFlight = async(_id) => {

    try{

        const flight = await Flight.findByIdAndDelete(_id);
        if(!flight) throw new ApiError(httpStatus.NOT_FOUND, "No flights found for deletion");

        return flight;

    }catch(err){
        throw err;
    }
}

const getFlightsByDetails = async(boardLoc, destLoc, time) => {

    try{
        
        const date = new Date(time.substring(0,4),(parseInt(time.substring(5,7))-1).toString(),time.substring(8,10),time.substring(11,13),time.substring(14,16),time.substring(17,19));
        console.log(date)
        

        const filterCriteria = {

            $and:[

                {
                    $or: [
                        {boarding: boardLoc},
                        {destination: destLoc},
        
                    ]
                },
                {departure: {$gte: date}}
            ]
            
        }

        const flights = await Flight.find(filterCriteria);

        return flights;

    }catch(err){
        throw err;
    }
}

module.exports = {
    addFlight,
    getFlights,
    updateFlight,
    deleteFlight,
    getFlightsByDetails
}