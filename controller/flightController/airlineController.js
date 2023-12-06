const {airlineService} = require('../../services/flightServices')

const airlineController = {

    async getAirlines(req, res, next){

        try{
            const allAirlines = await airlineService.allAirlines();
            res.json(allAirlines)
        }
        catch(err){
            next(err);
        }
    },

    async addAirline(req, res, next){

        try{
            const airline = await airlineService.addAirline(req.body);
            res.json(airline);
        } catch(err){
            next(err);
        }
    }

}

module.exports = airlineController;