const {flightService} = require('../../services/flightServices')

const airlineController = {


    async addFlight(req, res, next){

        try{
            const flight = await flightService.addFlight(req.body);
            res.json(flight);
        }
        catch(err){
            next(err)
        }
    },
    async getFlights(req, res, next){

        try{
            const flight = await flightService.getFlights();
            res.json(flight);
        }
        catch(err){
            next(err)
        }
    },
    async updateFlight(req, res, next){

        try{
            const _id = req.params.id;
            const flight = await flightService.updateFlight(_id, req.body);
            res.json(flight);
        }
        catch(err){
            next(err)
        }
    },
    async deleteFlight(req, res, next){

        try{
            const _id = req.params.id;
            const flight = await flightService.deleteFlight(_id);
            res.json(flight);
        }
        catch(err){
            next(err.message)
        }
    }
    
}

module.exports = airlineController;