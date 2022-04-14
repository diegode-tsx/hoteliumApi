const Joi = require('joi');

const today = new Date();
today.setUTCHours(0, 0, 0, 0);
const currentDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

const arrival_date = Joi.date().min(currentDate);
const departure_date = Joi.date().greater(Joi.ref('arrival_date'));
const num_guests = Joi.number().integer().max(10).min(1);
const num_rooms = Joi.number().integer().max(10).min(1);
const total_cost = Joi.number();
const reservation_code = Joi.string().max(14);
const rooms = Joi.array();

const name = Joi.string().max(60);
const phone = Joi.string().max(10);
const email = Joi.string().email();
const client = Joi.object({
   name: name.required(),
   phone: phone.required(),
   email: email.required()
});

const createReservationSchema = Joi.object({
   arrival_date: arrival_date.required(),
   departure_date: departure_date.required(),
   num_guests: num_guests.required(),
   num_rooms: num_rooms.required(),
   total_cost: total_cost.required(),
   reservation_code: reservation_code.required(),
   client: client.required(),
   rooms: rooms.required()
})

module.exports = { createReservationSchema }
