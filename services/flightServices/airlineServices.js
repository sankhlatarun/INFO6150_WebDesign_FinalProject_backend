const {Airline} = require('../../models/flightModels/airlines');

const allAirlines = async()=>{
    
    try{
        const airlines = await Airline.find();

        return airlines;
    } catch(err){
        throw err;
    }
}

const addAirline = async(args)=>{

    try{
        const airline = new Airline({
            ...args
        });
    
        await airline.save();
        return airline;
    }catch(err){
        throw err;
    }
}

module.exports = {
    allAirlines,
    addAirline 
}