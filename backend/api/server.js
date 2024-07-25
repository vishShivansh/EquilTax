const fs = require("fs");
const https = require("https");

const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const nodemailer = require("nodemailer");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS configuration
const allowedOrigins = [
  "http://localhost:5173",
  "https://equil-tax-beta.vercel.app",
  "http://equiltax.com",
  "https://equiltax.com",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));

// SSL certificate files
// const privateKey = fs.readFileSync("/home/equiltax/ssl.key", "utf8");
// const SSLCertificate = fs.readFileSync("/home/equiltax/ssl.cert", "utf8");
// const CACertificate = fs.readFileSync("/home/equiltax/ca.cert", "utf8");

// const credentials = {
//   key: privateKey,
//   cert: SSLCertificate,
//   ca: CACertificate, // CA certificate
// };

// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: "cad.crystalregistry.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER, // Your SMTP server username
    pass: process.env.SMTP_PASS, // Your SMTP server password
  },
});

// Email sending endpoint
app.post("/send-email", (req, res) => {
  console.log("Received request:", req.body);

  const { name, number, email, message } = req.body;

  const mailOptions = {
    from: `"Excited User" <${email}>`, // sender address
    to: "yash@equiltax.com", // list of receivers
    subject: `Message from ${name}`, // Subject line
    text: `Name: ${name}\nNumber: ${number}\nEmail: ${email}\nMessage: ${message}`, // plain text body
    html: `<h1>Message from ${name}</h1><p>Number: ${number}</p><p>Email: ${email}</p><p>Message: ${message}</p>`, // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).send("Failed to send message. Please try again.");
    }
    console.log("Email sent:", info.response);
    res.status(200).send("Email sent successfully!");
  });
});

// Start HTTPS server
// https.createServer(credentials, app).listen(PORT, "0.0.0.0", () => {
//   console.log(`Server is running on port ${PORT}`);
// });
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
