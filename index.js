const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const cors = require('cors');
const flightRouter = require('./routes/flightRoutes');
const {User} = require('./models/user.Model');
const mongoUri = `mongodb+srv://${process.env.DB_HOST}:${process.env.DB_PASS}@cluster0.ucfrjku.mongodb.net/${process.env.DB_ADMIN}`;

mongoose.connect(mongoUri, {
    usenewUrlParser:true,
    useUnifiedTopology:true,
})
.then(() => {
	console.log("connected")
})

app.use(express.json());

app.use(xss());
app.use(mongoSanitize());

app.use(cors());

app.use('/flights',flightRouter);
app.use('/hotels/',require('./routes/hotelRoutes'));

app.get("/", (req, res) => {
	res.send("Welcome to TravelEasy");
});

app.post("/createUser", async(req, res) => {
	try{
		const user = new User({
		  name: req.body.name,
		  password: req.body.password,
		  avatar: req.body.avatar,
		  role: req.body.role,
		  address: req.body.address,
		  city: req.body.city,
		  state: req.body.state,		  
		  email: req.body.email,
		  state: req.body.state,
		  country: req.body.country,
		  zip: req.body.zip,
		  phone: req.body.phone,
		  bookedHotels: req.body.bookedHotels ? req.body.bookedHotels : [],
		});
	  
		const data  = await user.save();
		res.send({data});
	  } catch(err){
		res.status(500).json({ error: 'Internal Server Error',message:err.message });
		console.log(err);
	  }
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});

