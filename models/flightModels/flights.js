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
            economy:15,
            business:20,
            first:0
        }
    },
    price:{
        required:true,
        type:Number,
        default:0
    },

    seat_price:{
        required:true,
        type:Object,
        default:{
            economy:50,
            business:100,
            first:500
        }
    },
    free_luggage:{
        required:true,
        type:Object,
        default:{
            cabin_weight:7,
            cabin_bags: 1,
            price_cabin:50,
            price_checkin:75,
            checkin_weight:46,
            checkin_bags:2
        }
    }
    
});

const Flight = mongoose.model('Flight', flightSchema);

module.exports = {Flight}