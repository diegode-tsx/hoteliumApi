const roomsData = require('./data_seeders/Rooms.data');
const { Room } = require('../db/models/room.model');
//const connectDB = require('../libs/mongoose');
//connectDB();

const importRooms = async () => {
	try {
        //const data = JSON.parse(RoomsData)
		await Room.deleteMany();

		await Room.insertMany(roomsData);

		console.log('Rooms Data Imported');
		process.exit();
	} catch (err) {
		console.log('Imposible realizar la importacion de los datos');
		process.exit(1);
	}
};



const deleteRooms = async () => {
	try {
		await Room.deleteMany();

		console.log('Data destroyed');
		process.exit();
	} catch (err) {
		console.log(error);
		process.exit(1);
	}
};

switch (process.argv[2]) {
	case '-dR': {
		deleteRooms();
		break;
	}
	default: {
		importRooms();
	}
}
module.exports = importRooms;
