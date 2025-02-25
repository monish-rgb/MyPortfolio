import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
//import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
//const { MongoClient, ServerApiVersion } = require('mongodb');

//const Contact = require('./contact.model.js'); // Import Mongoose model

const app = express();
app.use(cors());
app.use(bodyParser.json());

const uri = "mongodb+srv://monish:1234565997@portfolio.tpvxj.mongodb.net/?retryWrites=true&w=majority&appName=portfolio";
mongoose.connect(uri);

const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use other services like 'hotmail', 'yahoo', etc.
    auth: {
      user: 'monish6468@gmail.com',
      pass: 'gxcu gbxe rfqb lvjm' // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false  // This allows self-signed certificates
  }
  });

// // Define email options
// const mailOptions = {
//     from: 'your-email@gmail.com',
//     to: 'recipient@example.com',
//     subject: 'Test Email from Nodemailer',
//     text: 'Hello! This is a test email sent using Nodemailer in Node.js',
//     html: '<h1>Hello!</h1><p>This is a test email sent using <b>Nodemailer</b> in Node.js</p>'
//   };



//Define Contact Schema
const ContactSchema = new mongoose.Schema({
    email: { type: String, required: true },
    subject: String,
    message: { type: String, required: true }
});

const Contact = mongoose.model('Contact', ContactSchema);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/contact_form', (req, res) => {    
    console.log('Received Contact Form:', req.body);
    const newContact = new Contact(req.body);
    newContact.save();

    

           // Send Email Notification
           const mailOptions = {
            from: req.body.email,
            replyTo: req.body.email,
            to: 'monish6468@gmail.com', // Admin email where notifications should be sent
            subject: req.body.subject || 'No Subject',
            text: req.body.message,
        };
        // Send email
              transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                  return console.log('Error occurred:', error);
                }
                console.log('Email sent successfully!');
                console.log('Message ID:', info.messageId);
              });
    res.status(200).json({ success: true, message: 'Form submitted successfully!' });
});

app.get('/contact_form', (req, res) => {
    res.send('This is the GET /contact_form endpoint. Use POST to submit the form.');
  });

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
