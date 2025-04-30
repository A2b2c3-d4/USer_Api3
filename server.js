const express = require('express');
const dotenv = require('dotenv');
const ConnectedDB = require('./config/db');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/userRoutes');





dotenv.config();


ConnectedDB();


const app = express();


app.use(bodyParser.json());

app.use('/', userRoutes);


const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
