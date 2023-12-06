const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const seatSchema = Schema({

    economy:{
        type:Number,
        required:true,
        unique:true
    },
    business:{
        type:Number,
        required:true,
        unique:true
    },
    first:{
        type:Number,
        required:true,
        unique:true
    }
    
});

const Seat = mongoose.model('Seat', seatSchema);

module.exports = {Seat}