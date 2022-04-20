const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
require('./libs/mongoose');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

process.on('uncaughtException', function(err) {
   console.log('Caught exception: ' + err);
});

app.listen(port, () => {
   console.log('Application started successfully');
})
