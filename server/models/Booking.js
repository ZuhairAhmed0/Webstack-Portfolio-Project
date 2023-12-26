const mongoose = require("mongoose");

const BookingSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  numOfPeople: {
    type: Number,
    required: true,
  },
});

const Booking = mongoose.model("booking", BookingSchema);

module.exports = Booking;
