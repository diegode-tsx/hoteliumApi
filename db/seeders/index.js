const importRooms = require ('./rooms.seed');
const importHotels = require('./hotels.seed');
const importCountries = require('./countries.seed');
const importServices = require('./services.seed');
require('../../libs/mongoose');


 const importSeeds = async () => {
    await importRooms();
    await importCountries();
    await importServices();
    await importHotels();
    
}

