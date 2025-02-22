const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Contact = require('./contact.model.js'); // Import Mongoose model

const app = express();
app.use(cors());
app.use(bodyParser.json());


// // Connect to MongoDB
// mongoose.connect('mongodb://127.0.0.1:27017/portfolioDB', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log('✅ Connected to MongoDB'))
// .catch(err => console.error('❌ MongoDB connection error:', err));

mongoose.connect('mongodb+srv://monish:1234565997@portfolio.tpvxj.mongodb.net/?retryWrites=true&w=majority&appName=portfolio')
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch(err => console.error('❌ MongoDB Atlas connection error:', err));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/contact_form', (req, res) => {    
    console.log('Received Contact Form:', req.body);
    res.status(200).json({ success: true, message: 'Form submitted successfully!' });
});

app.get('/contact_form', (req, res) => {
    res.send('This is the GET /contact_form endpoint. Use POST to submit the form.');
  });

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
