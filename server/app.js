const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const foodsRoutes = require("./routes/foodsRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();
const port = process.env.PORT || 3500;

// confugratuion files
dotenv.config({ path: "./config/.env" });

// database connection
connectDB();

// middlewares
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// routes
app.use("/", foodsRoutes);
app.use("/api/v1/foods", foodsRoutes);
app.use("/api/v1/booking", bookingRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
