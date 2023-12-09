const {Hotel} = require('../../models/hotelModels/hotel.model');

// Add a Hotel
const addHotel = async (req, res) => {
  // Logic to add a Hotel
  try{
  const hotel = new Hotel({
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    country: req.body.country,
    zip: req.body.zip,
    phone: req.body.phone,
    policies: req.body.policies,
    cancellation: req.body.cancellation,
    roomService: req.body.roomService,
    parking: req.body.parking,
    internet: req.body.internet,
    pets: req.body.pets,
    kids: req.body.kids,
    languages: req.body.languages,
    other: req.body.other,
    description: req.body.description,
    longitude: req.body.longitude,
    latitude: req.body.latitude,
    amenities: req.body.amenities,
    rating: req.body.rating,
    website: req.body.website,
    tollFree: req.body.tollFree,
    type: req.body.type,
    email: req.body.email,
    photos : req.body.photos ? req.body.photos : [],
    rate : req.body.rate ? req.body.rate : 100,
  });

  const data  = await hotel.save();
  // (err, hotel) => {
  //   if (err) {
  //     return res.status(400).json({
  //       error: "Not able to save hotel in DB",
  //     });
  //   }
  //   return res.json({ hotel });
  // }
  res.send({data});
} catch(err){
  // res.status(500).send('Error while adding hotel',err);
  res.status(500).json({ error: 'Internal Server Error',message:err.message });
  console.log(err);
}
};

// Update a Hotel
const updateHotel = async (req, res) => {
  // Logic to update a Hotel
  try{
    const hotel = await Hotel.findById(req.params.id);
    console.log(hotel);
    if(hotel){
      hotel.name = req.body.name || hotel.name;
      hotel.address = req.body.address || hotel.address;
      hotel.city = req.body.city || hotel.city;
      hotel.state = req.body.state || hotel.state;
      hotel.country = req.body.country || hotel.country;
      hotel.zip = req.body.zip || hotel.zip;
      hotel.phone = req.body.phone || hotel.phone;
      hotel.policies = req.body.policies || hotel.policies;
      hotel.cancellation = req.body.cancellation || hotel.cancellation;
      hotel.roomService = req.body.roomService || hotel.roomService;
      hotel.parking = req.body.parking || hotel.parking;
      hotel.internet = req.body.internet || hotel.internet;
      hotel.pets = req.body.pets || hotel.pets;
      hotel.kids = req.body.kids || hotel.kids;
      hotel.languages = req.body.languages || hotel.languages;
      hotel.other = req.body.other || hotel.other;
      hotel.description = req.body.description || hotel.description;
      hotel.longitude = req.body.longitude || hotel.longitude;
      hotel.latitude = req.body.latitude || hotel.latitude;
      hotel.amenities = req.body.amenities || hotel.amenities;
      hotel.rating = req.body.rating || hotel.rating;
      hotel.website = req.body.website || hotel.website;
      hotel.tollFree = req.body.tollFree || hotel.tollFree;
      hotel.type = req.body.type || hotel.type;
      hotel.email = req.body.email || hotel.email;
      hotel.photos = req.body.photos ? req.body.photos : [];
      hotel.rate = req.body.rate ? req.body.rate : 100;
      const updatedHotel = await hotel.save();
      res.send({message:'Hotel Updated', hotel: updatedHotel});
    } else {
      res.status(404).send({message:'Hotel not found'});
    }
  } catch(err){
    res.status(500).json({ error: 'Internal Server Error',message:err.message });
    console.log(err);
  }

};

// Book a Hotel
const bookHotel = async (req, res) => {
  // Logic to book a Hotel
  try{
    const hotel = await Hotel.findById(req.params.id);
    if(hotel){
      const booking = {
        user: req.body.user,
        name: req.body.name,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        zip: req.body.zip,
        phone: req.body.phone,
        policies: req.body.policies,
        cancellation: req.body.cancellation,
        roomService: req.body.roomService,
        parking: req.body.parking,
        internet: req.body.internet,
        pets: req.body.pets,
        kids: req.body.kids,
        languages: req.body.languages,
        other: req.body.other,
        description: req.body.description,
        longitude: req.body.longitude,
        latitude: req.body.latitude,
        amenities: req.body.amenities,
        rating: isNaN(req.body.rating) ? 0 : Number(rating),
        website: req.body.website,
        tollFree: req.body.tollFree,
        type: req.body.type,
        email: req.body.email,
        userId : req.body.userId,
      };
      hotel.bookings.push(booking);
      const updatedHotel = await hotel.save();

      

      res.send({message:'Hotel Booked', hotel: updatedHotel});
    } else {
      res.status(404).send({message:'Hotel not found'});
    }
  } catch(err){
    res.status(500).json({ error: 'Internal Server Error',message:err.message });
    console.log(err);
  }
};

// Remove a Hotel
const removeHotel = async (req, res) => {
  // Logic to remove a Hotel
  try{
    const hotel = await Hotel.findById(req.params.id);
    if(hotel){
      const deleteHotel = await hotel.remove();
      res.send({message:'Hotel Deleted', hotel: deleteHotel});
    } else {
      res.status(404).send({message:'Hotel not found'});
    }
  } catch(err){
    res.status(500).json({ error: 'Internal Server Error',message:err.message });
    console.log(err);
  }
};

const getAllHotels = async (req, res) => {
  // Logic to get all Hotels
  try{
    const hotels = await Hotel.find();
    res.send(hotels);
  } 
  catch(err){
    res.status(500).json({ error: 'Internal Server Error',message:err.message });
    console.log(err);
  }
};


module.exports = {
  addHotel,
  updateHotel,
  bookHotel,
  removeHotel,
  getAllHotels
};
