const Company = require('../models/Company');

exports.importData = async (data) => {
    try {
        for (const item of data) {
            const company = new Company(item);
            await company.save();
        }
    } catch (error) {
        throw new Error('Error saving company data');
    }
};
