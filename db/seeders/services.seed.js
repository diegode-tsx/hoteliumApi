const servicesData = require('./data_seeders/services.data');
const { Service } = require('../models/service.model');

const importServices = async () => {
	try {
        //const data = JSON.parse(servicesData)
		await Service.deleteMany();

		await Service.insertMany(servicesData);

		console.log('Services Data Imported');
		process.exit();
	} catch (err) {
		console.log('Error importing service data');
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
