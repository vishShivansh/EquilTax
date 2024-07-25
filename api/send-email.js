/* eslint-disable no-undef */
const formData = require("form-data");
const Mailgun = require("mailgun.js");

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY,
});

module.exports = async (req, res) => {
  if (req.method === "POST") {
    const { name, number, email, message } = req.body;

    try {
      await mg.messages.create(process.env.MAILGUN_DOMAIN, {
        from: `Excited User <mailgun@${process.env.MAILGUN_DOMAIN}>`,
        to: "sgshivansh22@gmail.com",
        subject: `Message from ${name}`,
        text: `Name: ${name}\nNumber: ${number}\nEmail: ${email}\nMessage: ${message}`,
        html: `<h1>Message from ${name}</h1><p>Number: ${number}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
      });

      res.status(200).send("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Failed to send message. Please try again.");
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
