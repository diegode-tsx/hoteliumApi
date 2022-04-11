const importRooms = require ('./rooms.seed');
const importHotels = require('./hotels.seed');
const importCountries = require('./countries.seed')
const connectDB = require('../libs/mongoose');
connectDB();


 const importSeeds = async () => {
    await importRooms();
    await importCountries();
    await importHotels();
}
