const fs = require("fs");
const https = require("https");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const formData = require("form-data");
const Mailgun = require("mailgun.js");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Serve static files from the 'public_html' directory
app.use(express.static(path.join(__dirname, "index.html")));

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
const privateKey = fs.readFileSync("/home/equiltax/ssl.key", "utf8");
const SSLCertificate = fs.readFileSync("/home/equiltax/ssl.cert", "utf8");
const CACertificate = fs.readFileSync("/home/equiltax/ca.cert", "utf8");

const credentials = {
  key: privateKey,
  cert: SSLCertificate,
  ca: CACertificate, // CA certificate
};

// Create Mailgun client
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY,
});

// Email sending endpoint
app.post("/send-email", (req, res) => {
  console.log("Received request:", req.body);

  const { name, number, email, message } = req.body;

  mg.messages
    .create(process.env.MAILGUN_DOMAIN, {
      from: `Excited User <mailgun@${process.env.MAILGUN_DOMAIN}>`,
      to: "sgshivansh22@gmail.com",
      subject: `Message from ${name}`,
      text: `Name: ${name}\nNumber: ${number}\nEmail: ${email}\nMessage: ${message}`,
      html: `<h1>Message from ${name}</h1><p>Number: ${number}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    })
    .then((msg) => {
      console.log("Email sent:", msg);
      res.status(200).send("Email sent successfully!");
    })
    .catch((err) => {
      console.error("Error sending email:", err);
      res.status(500).send("Failed to send message. Please try again.");
    });
});

// GET endpoint for testing
app.get("/test", (req, res) => {
  res.send("Server is running and responding to GET requests.");
});

// Start HTTPS server
https.createServer(credentials, app).listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
