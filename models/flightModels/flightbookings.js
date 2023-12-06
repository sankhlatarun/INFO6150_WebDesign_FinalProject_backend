const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = mongoose.Schema({

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
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
    }
    
});

const Bookings = mongoose.model('Bookings', bookingSchema);

module.exports = {Bookings}