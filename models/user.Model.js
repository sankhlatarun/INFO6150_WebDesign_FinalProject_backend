const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
    name: {
        type: String
       
    },
    email: {
        type: String
       
    },
    password: {
        type: String
      
       
    },
    avatar: {
        type: String
    },
    role: {
        type: String
        
    },
    address: {
        type: String
        
    },
    city: {
        type: String
       
    },
    state: {
        type: String
        
    },
    country: {
        type: String,
       
    },
    zip: {
        type: String
       
    },
    phone: {
        type: String,
        maxLength: 255
    },
    gender: {
        type:String
    },
    bookedHotels: [
        {
            hotel: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Hotel',
            },
            room: String, // Room number or ID
            checkIn: Date,
            checkOut: Date,

        },
    ],
});


const User = mongoose.model('User', UserSchema);

module.exports = { User }