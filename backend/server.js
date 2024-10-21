require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 5000;

console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? 'Loaded' : 'Not Loaded');

app.use(express.json());

// Configure nodemailer to use your email provider
const transporter = nodemailer.createTransport({
    service: 'Outlook', // You can also use 'Gmail', etc.
    auth: {
        user: process.env.EMAIL_USER, // Loaded from environment variable
        pass: process.env.EMAIL_PASS  // Loaded from environment variable
    }
});

// Create an endpoint to send emails
app.post('/send-email', (req, res) => {
    const { to, subject, text } = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER, // Use your email from environment variable
        to,
        subject,
        text
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
