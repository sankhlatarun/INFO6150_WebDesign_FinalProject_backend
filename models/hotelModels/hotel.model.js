const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HotelSchema = mongoose.Schema({

    name:{
        required:true,
        type:String,
        required : true,
        maxLength:255
    },
    availability: {
        type: Boolean,
        default: true,
    },
    schedule: {
        type: Date,
        default: Date.now,
    },
    rate: Number,
    rooms: [ // specific to the type of hotel generally hostels and stay hotels have shared rooms
        {
            roomType: String, // Single, Double, Triple, Quad, Queen, King, Twin, Double-double, Studio, Master Suite, Mini Suite, Cabana, Presidential Suite, Adjoining Rooms, Adjacent Rooms, Family Rooms, Honeymoon Suite, Hospitality Suite, Accessible Rooms, etc.
            roomNumber: String,
            hourlyAvailability: [
                {
                  hour: Number,
                  available: {
                    type: Boolean,
                    default: true,
                  },
                },
            ],
            hourlyRate: Number,
        },
    ],
    type :{
        type : String, // Airbnbs, Hotels, Hostels, Resorts, Villas
        required : true,
        //maxLength : 255
    },
    active :{
        type : Boolean,
        default : true
    },
    address :{
        type : String,
        required : true,
        //maxLength : 255
    },
    city :{
        type : String,
        required : true,
        //maxLength : 255
    },
    state :{
        type : String,
        required : true,
        //maxLength : 255
    },
    country :{
        type : String,
        required : true,
        //maxLength : 255
    },
    zip :{
        type : String,
        required : true,
        //maxLength : 255
    },
    phone :{
        type : String,
        required : true,
        //maxLength : 255
    },
    fax :{
        type : String,
        //maxLength : 255
    },
    tollFree :{
        type : String,
        //maxLength : 255
    },
    email :{
        type : String,
        required : true,
        //maxLength : 255
    },
    website :{
        type : String,
        required : true,
        //maxLength : 255
    },
    latitude :{
        type : String,
        required : true,
        //maxLength : 255
    },
    longitude :{
        type : String,
        required : true,
        //maxLength : 255
    },
    rating :{
        type : Number,
        required : true,
        //maxLength : 255
    },
    reviews : [
        {
          user: mongoose.Schema.Types.ObjectId,
          rating: Number,
          comment: String,
        },
      ],
    amenities :{
        type : String,
        required : true,
        // //maxLength : 255
    },
    description :{
        type : String,
        required : true,
        // //maxLength : 255
    },
    photos :[String], // photo URLs
    bookings: [ // depends on the type of booking
        {
          user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
          },
          room: String, // Room number or ID
          checkIn: Date,
          checkOut: Date,
        },
    ],
    policies :{
        type : String,
        required : true,
        //maxLength : 255
    },
    cancellation :{
        type : String,
        required : true,
        //maxLength : 255
    },
    roomService :{
        type : String,
        required : true,
        //maxLength : 255
    },
    parking :{
        type : String,
        required : true,
        //maxLength : 255
    },
    internet :{
        type : String,
        required : true,
        //maxLength : 255
    },
    pets :{
        type : String,
        required : true,
        //maxLength : 255
    },
    kids :{
        type : String,
        required : true,
        //maxLength : 255
    },
    languages :{
        type : String,
        required : true,
        //maxLength : 255
    },
    other :{
        type : String,
        required : true,
        //maxLength : 255
    },
    createdAt :{
        type : Date,
        default : Date.now
    },
    updatedAt :{
        type : Date,
        default : Date.now
    }
});

const Hotel = mongoose.model('Hotel', HotelSchema);

module.exports = {Hotel}