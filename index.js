const express = require('express');
require('dotenv').config();

const app = express();
// Connect to Database
require("./config/database").connect();

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT || 5000}`);
});