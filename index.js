const express = require('express');
const multer = require('multer');
const xlsx = require('xlsx');
const path = require('path');
require('dotenv').config();

const companyController = require('./controllers/company');
const contactController = require('./controllers/contact');

const app = express();

require("./config/database").connect();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
    const file = req.file;

    if (!file) {
        return res.status(400).json({ success: false, message: 'No file uploaded.' });
    }

    try {
        const workbook = xlsx.readFile(file.path);
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const data = xlsx.utils.sheet_to_json(sheet);

        res.status(200).json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error parsing file.' });
    }
});

app.post('/confirm', async (req, res) => {
    res.status(200).json({ success: true });
});

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT || 5000}`);
});
