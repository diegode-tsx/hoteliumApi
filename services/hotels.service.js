const boom = require('@hapi/boom');

const { Hotel } = require('../db/models/hotel.model');
const { Country } = require('../db/models/country.model');

class HotelsService {
   constructor() {

   }

   async find() {
      const query = [
         {
            path: 'rooms',
            select: 'room_type price -_id',
            options: { sort: { 'price': 1 } }
         }
      ]
      const hotels = await Hotel.find()
         .select('name rating short_desc rooms images tag')
         .populate(query);

      if (hotels.length === 0) {
         throw boom.notFound('hotels not found');
      }

      return hotels;
   }

   async findById(id) {
      const query = [
         {
            path: 'rooms',
            options: { sort: { 'price': 1 } }
         },
         {
            path: 'services',
            select: '-_id'
         }
      ]
      const hotel = await Hotel.findById(id)
         .select('name description services tag rooms location local_iso images')
         .populate(query);

      if (!hotel) {
         throw boom.notFound('hotel not found');
      }

      return hotel;
   }

   async findByTag(tag) {
      const query = [
         {
            path: 'rooms',
            select: 'room_type price -_id',
            options: { sort: { 'price': 1 } }
         }
      ]
      const hotels = await Hotel.find(tag)
         .select('name rating short_desc rooms')
         .populate(query);

      if (hotels.length === 0) {
         throw boom.notFound('hotels not found');
      }

      return hotels;
   }

   async findByCountry(name) {
      const idCountry = await Country.find(name).select('_id');

      const query = [
         {
            path: 'rooms',
            select: 'room_type price -_id',
            options: { sort: { 'price': 1 } }
         }
      ]
      const hotels = await Hotel.find({country: idCountry})
         .select('name rating short_desc rooms country')
         .populate(query);

      if (hotels.length === 0) {
         throw boom.notFound('hotels not found');
      }

      return hotels;
   }

   async create(data) {
      const newHotel = await Hotel.insertMany(data);
      return newHotel;
      //return newHotel;
   }
}

module.exports = HotelsService;
