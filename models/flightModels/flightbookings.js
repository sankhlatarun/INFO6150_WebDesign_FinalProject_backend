const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = mongoose.Schema({

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },

    passengers:{
        type:Array,
        required:true,
        default:[]
    },

    bookingDate:{
        type:Date,
        required:true
    },

    amount:{
        type:Number,
        required:true
    },

    flights:{
        type:Array,
        required:true,
        default:[]
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
    luggage:{
        required:true,
        type:Object,
        default:{
            cabin_weight:7,
            cabin_bags: 1,
            checkin_weight:46,
            checkin_bags:2
        }
    }
    
    
});

const Bookings = mongoose.model('Bookings', bookingSchema);

module.exports = {Bookings}