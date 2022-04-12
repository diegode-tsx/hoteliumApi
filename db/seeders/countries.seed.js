const countriesData = require('./data_seeders/countries.data');
const { Country } = require('../models/country.model');

const importCountries = async () => {
	try {
        //const data = JSON.parse(CountriesData)
		await Country.deleteMany();

		await Country.insertMany(countriesData);

		console.log('Countries Data Imported');
		process.exit();
	} catch (err) {
		console.log('Error importing country data');
		process.exit(1);
	}
};

const deleteCountries = async () => {
	try {
		await Country.deleteMany();

		console.log('Data destroyed');
		process.exit();
	} catch (err) {
		console.log(error);
		process.exit(1);
	}
};

switch (process.argv[2]) {
	case '-dR': {
		deleteCountries();
		break;
	}
	default: {
		importCountries();
	}
}
module.exports = importCountries;
