const Contact = require('../models/Contact');

exports.importData = async (data) => {
    try {
        for (const item of data) {
            const contact = new Contact(item);
            await contact.save();
        }
    } catch (error) {
        throw new Error('Error saving contact data');
    }
};
