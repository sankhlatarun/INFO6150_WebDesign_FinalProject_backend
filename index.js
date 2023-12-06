const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const cors = require('cors');
const flightRouter = require('./routes/flightRoutes');

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

const port = process.env.PORT || 3001;

app.listen(port, () => {
	console.log(`Server running on port : ${port}`);
});

