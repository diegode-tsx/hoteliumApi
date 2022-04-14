const express = require('express');

const hotelsRouter = require('./hotels.router');
const reservationsRouter = require('./reservations.router');
const countriesRouter = require('./countries.router');
const emailRouter = require('./nodemailer.route');

function routerApi(app) {
   app.use('/hotels', hotelsRouter);
   app.use('/reservations', reservationsRouter);
   app.use('/countries', countriesRouter);
   app.use('/email', emailRouter);
}

module.exports = routerApi;
