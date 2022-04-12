const hotelsData = require('./data_seeders/hotels.data');
const { Hotel } = require('../models/hotel.model');


const importHotels = async () => {
	try {
        //const data = JSON.parse(hotelsData)
		await Hotel.deleteMany();

		await Hotel.insertMany(hotelsData);

		
		console.log('Hotels Data Imported');
		process.exit();
	} catch (err) {
		console.log('Error importing hotel data');
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
