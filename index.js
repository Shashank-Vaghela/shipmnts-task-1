const express = require('express');
const multer = require('multer');
const xlsx = require('xlsx');
const path = require('path');
require('dotenv').config();

const companyController = require('./controllers/company');

const app = express();

require("./config/database").connect();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const upload = multer({ dest: 'uploads/' });

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT || 5000}`);
});