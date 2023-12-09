const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const cors = require('cors');
const flightRouter = require('./routes/flightRoutes');
const { User } = require('./models/user.Model');
const cityRouter = require("./controller/busController/city.controller");
const busRouter = require("./controller/busController/bus.controller");
const userRouter = require("./controller/busController/user.controller");
const orderRouter = require("./controller/busController/order.controller")
const paymentController = require('./controller/busController/payment.controller');
const mongoUri = `mongodb+srv://${process.env.DB_HOST}:${process.env.DB_PASS}@cluster0.ucfrjku.mongodb.net/${process.env.DB_ADMIN}`;
const stripe = require('stripe')(process.env.DB_STRIPE_KEY);

mongoose.connect(mongoUri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
.then(() => {
	console.log("connected")
})
.catch((err) => {
	console.error("Error connecting to MongoDB:", err.message);
});

app.use(express.json());

app.use(xss());
app.use(mongoSanitize());

app.use(cors());
app.use("/user", userRouter)
app.use("/city", cityRouter);
app.use("/bus", busRouter);
app.use("/order", orderRouter);
app.use("/api/payment", paymentController);
app.use('/flights', flightRouter);
app.use('/hotels/', require('./routes/hotelRoutes'));

app.use("/api/payment", paymentController);

app.post("/secret", async (req, res) => {
	try {

		if (!req.body.amount) return res.status(400).send('Amount is required');
		const stripe = require('stripe')(process.env.DB_STRIPE_KEY);
		const paymentIntent = await stripe.paymentIntents.create({
			amount: req.body.amount,
			currency: 'usd',
			automatic_payment_methods: {
				enabled: true,
			},
		});
		res.send({ client_secret: paymentIntent.client_secret });
	}
	catch (err) {
		console.log(err)
		res.status(500).json({ error: 'Internal Server Error', message: err.message });
	}
});

app.get("/", (req, res) => {
	res.send("Welcome to TravelEasy");
});

app.post("/createUser", async (req, res) => {
	try {
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

		const data = await user.save();
		res.send({ data });
	} catch (err) {
		res.status(500).json({ error: 'Internal Server Error', message: err.message });
		console.log(err);
	}
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
	console.log(`Server running on port : ${port}`);
});

