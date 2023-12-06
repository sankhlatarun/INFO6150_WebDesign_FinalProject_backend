const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 255
    },
    email: {
        type: String,
        required: true,
        maxLength: 255
    },
    password: {
        type: String,
        required: true,
        maxLength: 255
    },
    avatar: {
        type: String,
    },
    role: {
        type: String,
        required: true,
        maxLength: 255
    },
    address: {
        type: String,
        required: true,
        maxLength: 255
    },
    city: {
        type: String,
        required: true,
        maxLength: 255
    },
    state: {
        type: String,
        required: true,
        maxLength: 255
    },
    country: {
        type: String,
        required: true,
        maxLength: 255
    },
    zip: {
        type: String,
        required: true,
        maxLength: 255
    },
    phone: {
        type: String,
        required: true,
        maxLength: 255
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