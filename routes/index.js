const express = require('express');

const hotelsRouter = require('./hotels.router');
const reservationsRouter = require('./reservations.router');
const countriesRouter = require('./countries.router');

function routerApi(app) {
   app.use('/hotels', hotelsRouter);
   app.use('/reservations', reservationsRouter);
   app.use('/countries', countriesRouter);
}

module.exports = routerApi;
