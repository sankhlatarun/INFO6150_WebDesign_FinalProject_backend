const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = mongoose.Schema({

    airline:{
        required:true,
        type:String,
        maxLength:255
    },
    airplane:{
        required:true,
        type:String,
        maxLength:255
    },
    boarding:{
        required:true,
        type:String,
        maxLength:255
    },
    destination:{
        required:true,
        type:String,
        maxLength:255
    },
    departure:{
        required:true,
        type:Date,
        default:Date.now
    },
    arrival:{
        required:true,
        type:Date,
        default:Date.now
    },
    seats:{
        type:Object,
        required:true,
        default:{
            economy:0,
            business:0,
            first:0
        }
    },
    price:{
        required:true,
        type:Number
    }
    
});

const Flight = mongoose.model('Flight', flightSchema);

module.exports = {Flight}