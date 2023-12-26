const mongoose = require("mongoose");

async function connectDB() {
  mongoose
    .connect(process.env.BD_URL)
    .then(() => console.log("DB connection successfully!"))
    .catch((err) => {
      console.log("DB connection error: " + err.message);
    });
}

module.exports = connectDB;
