const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const airlineSchema = Schema({

    name:{
        required:true,
        unique:true,
        type:String,
        maxLength:255
    },

    airplanes:{
        required:true,
        type:Array,
        default:[]

    }
});

const Airline = mongoose.model('Airline', airlineSchema);

module.exports = {Airline}