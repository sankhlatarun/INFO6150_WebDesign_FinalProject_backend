const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const cors = require('cors');
const flightRouter = require('./routes/flightRoutes');
const cityRouter = require("./controller/busController/city.controller");
const busRouter = require("./controller/busController/bus.controller");
const userRouter=require("./controller/busController/user.controller");
const orderRouter=require("./controller/busController/order.controller")
const paymentController = require('./controller/busController/payment.controller');
const mongoUri = `mongodb+srv://${process.env.DB_HOST}:${process.env.DB_PASS}@cluster0.ucfrjku.mongodb.net/${process.env.DB_ADMIN}`;

mongoose.connect(mongoUri, {
useNewUrlParser:true,
useUnifiedTopology:true,
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
app.use("/user",userRouter)
app.use("/city", cityRouter);
app.use("/bus", busRouter);
app.use("/order", orderRouter);
app.use("/api/payment", paymentController);
app.use('/flights',flightRouter);
app.use('/hotels/',require('./routes/hotelRoutes'));

app.use("/api/payment", paymentController);

app.get("/", (req, res) => {
	res.send("Welcome to TravelEasy");
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
	console.log(`Server running on port : ${port}`);
});

