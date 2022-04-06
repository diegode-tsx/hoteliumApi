const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
require('./libs/mongoose');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

routerApi(app);

app.listen(port, () => {
   console.log('Application started successfully');
})
