const hotelsData = require('./data_seeders/hotels.data');
const { Hotel } = require('../db/models/hotel.model');
//const connectDB = require('../libs/mongoose');
//connectDB();

const importHotels = async () => {
	try {
        //const data = JSON.parse(hotelsData)
		await Hotel.deleteMany();

		await Hotel.insertMany(hotelsData);

		
		console.log('Hotels Data Imported');
		process.exit();
	} catch (err) {
		console.log('Imposible realizar la importacion de los datos');
		process.exit(1);
	}
};



const deleteHotels = async () => {
	try {
		await Hotel.deleteMany();

		console.log('Data destroyed');
		process.exit();
	} catch (err) {
		console.log(error);
		process.exit(1);
	}
};

switch (process.argv[2]) {
	case '-d': {
		deleteHotels();
		break;
	}
	default: {
		importHotels();
	}
}
module.exports = importHotels;
