const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    email: { type: String, required: true },
    subject: { type: String, required: false },
    message: { type: String, required: true },
});

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;
