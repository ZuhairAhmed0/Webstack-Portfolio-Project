const { validationResult } = require("express-validator");
const nodemailer  = require("nodemailer")
const Booking = require("../models/Booking");

const validationError = (error) => {
  let errors = {};
  error.array().forEach((err) => {
    errors[err.path] = err.msg;
  });

  return errors;
};

const sendOrderToCustomer = async (booking) => {
  const mailOptions = {
      from: process.env.EMAIL,
      to: booking.email,
      subject: `Successfully booked at ${booking.date} / ${booking.time}`,
      html: `<p>Booking info</p>`,
  };

  const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
  });

  const accessToken = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        reject(err);
      }
      resolve(token);
    });
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      accessToken,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
    },
  });

  transporter.sendMail(mailOptions);
};

const booking = async (req, res) => {
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      const errors = validationError(error);
      return res.json({ message: "Please enter valid data" });
    }
    const booking = await Booking.create(req.body);
    res.json({
      message: `Successfully booked at ${booking.date} / ${booking.time}`,
    });
  } catch (error) {
    res.status(500).json({ message: `booking failed, try again later` });
  }
};

module.exports = {
  booking,
};
