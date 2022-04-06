const express = require('express');

const hotelsRouter = require('./hotels.router');

function routerApi(app) {
   app.use('/hotels', hotelsRouter);
}

module.exports = routerApi;
