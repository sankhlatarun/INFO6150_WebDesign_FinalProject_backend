const express = require('express');
const flightRouter = express.Router();
const airlineRoute = require('./airline.route');
const flightRoute = require('./flight.routes');
const bookingRoute = require('./booking.route');

const routes = [
    {
        path: '/airlines',
        route: airlineRoute

    },
    {
        path: '/flights',
        route: flightRoute

    },
    {
        path: '/bookings',
        route: bookingRoute

    }
];

routes.forEach((route) => {
    flightRouter.use(route.path, route.route)
})

module.exports = flightRouter;