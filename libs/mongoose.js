const mongoose = require('mongoose');

const config = require('../config/config');

const USER = encodeURI(config.dbUser);
const PASSWORD = encodeURI(config.dbPassword);
const URI = `mongodb://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}?authSource=admin`;

const connectDB = async () => {
<<<<<<< HEAD
await mongoose.connect(URI);
=======
   await mongoose.connect(URI);
>>>>>>> e937ab6df3636df9af600d8b4a72b95574bd9aae
};
connectDB();

mongoose.connection.on('connected', function () {
   console.log('Conectado a la base de datos: ' + URI)
});

mongoose.connection.on('error', function (err) {
   console.log('Error al conectar a la base de datos: ' + err)
});

mongoose.connection.on('disconnected', function () {
   console.log('Desconectado de la base de datos')
});

process.on('SIGINT', function () {
   mongoose.connection.close(function () {
      console.log('Desconectado de la base de datos al terminar la app')
      process.exit(0)
   })
});

module.exports = connectDB;
