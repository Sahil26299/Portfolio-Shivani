// server/app.js
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const port = 5000;

//middleware
app.use(express.json());
app.use(cors());

// Implement your Nodemailer logic here
const transporter = nodemailer.createTransport({
    service: 'Gmail', // Replace with your email service provider
    auth: {
        type: "OAuth2",
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
});

transporter.verify((err, success) => {
    err
        ? console.log(err)
        : console.log(`=== Server is ready to take messages: ${success} ===`);
});

// Your API endpoint to handle sending email
app.post('/send-email', (req, res) => {
    // ... Handle the email sending logic using Nodemailer
    const { name, email, message } = req.body;

    // Email content
    const mailOptions = {
        from: email, // Sender email address
        to: 'shivanibhojane226@gmail.com', // Your email address where you want to receive the message
        replyTo:email,
        subject: `New Message from ${name} (${email})`,
        text: message,
    };

    // Send the email using Nodemailer transporter
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:::', error, process.env.EMAIL_USER);
            res.status(500).json({ success: false, message: 'Error sending email' });
        } else {
            console.log('Email sent:', info.response);
            res.status(200).json({ success: true, message: 'Email sent successfully' });
        }
    })
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
