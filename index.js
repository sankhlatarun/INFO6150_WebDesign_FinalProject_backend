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


app.post('/login', async (req,res)=>{
	try{

		  try{
			const user = new ({
			  name: req.body.name,
			  type: req.body.type,
			  email: req.body.email,
			  email_verified: false,
				nickname:  req.body.nickname,
				picture: req.body.picture,
				sub: req.body.sub
			});
		  
			const data  = await User.save();
			res.send({data});
		  } catch(err){
			res.status(500).json({ error: 'Internal Server Error',message:err.message });
			console.log(err);
		  }

	}catch(err){

	}
})
app.get("/", (req, res) => {
	res.send("Welcome to TravelEasy");
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
	console.log(`Server running on port : ${port}`);
});

