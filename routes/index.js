const express = require('express');

const hotelsRouter = require('./hotels.router');
const reservationsRouter = require('./reservations.router');

function routerApi(app) {
   app.use('/hotels', hotelsRouter);
   app.use('/reservations', reservationsRouter);
}

module.exports = routerApi;
