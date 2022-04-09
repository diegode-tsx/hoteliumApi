const boom = require('@hapi/boom');

const { Hotel } = require('../db/models/hotel.model');

class HotelsService {
   constructor() {

   }

   async find(detailed) {
      if (await Hotel.find() === 0) {
         throw boom.notFound('hotels not found');
      }

      let hotels;
      let populatedHotels;
      let query;

      if (!detailed) {

         hotels = await Hotel.find()
            .select('name rating short_desc rooms');

         query = [
            {
               path: 'rooms',
               select: 'room_type price -_id',
               options: { sort: { 'price': 1 } }
            }
         ]

         populatedHotels = Hotel.populate(hotels, query);

      } else {

         hotels = await Hotel.find()
            .select('name description services tag rooms location');

         query = [
            {
               path: 'rooms',
               select: 'room_type price capacity -_id',
               options: { sort: { 'price': 1 } }
            }
         ]

         populatedHotels = Hotel.populate(hotels, query);
      }

      return populatedHotels;
   }

   async findById(id) {
      //return hotel;
   }

   async findByFilter(filter) {
      //return hotels;
   }

   async create(data) {
      const newHotel = await Hotel.create(data);
      return newHotel;
      //return newHotel;
   }
}

module.exports = HotelsService;
