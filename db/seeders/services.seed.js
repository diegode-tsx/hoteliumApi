const servicesData = require('./data_seeders/services.data');
const { Service } = require('../db/models/service.model');
const connectDB = require('../libs/mongoose');
connectDB();

const importServices = async () => {
	try {
        //const data = JSON.parse(servicesData)
		await Service.deleteMany();

		await Service.insertMany(servicesData);

		console.log('Data Imported');
		process.exit();
	} catch (err) {
		console.log('Imposible realizar la importacion de los datos');
		process.exit(1);
	}
};



const deleteservices = async () => {
	try {
		await service.deleteMany();

		console.log('Data destroyed');
		process.exit();
	} catch (err) {
		console.log(error);
		process.exit(1);
	}
};

switch (process.argv[2]) {
	case '-d': {
		deleteservices();
		break;
	}
	default: {
		importServices();
	}
}
module.exports = importServices;
