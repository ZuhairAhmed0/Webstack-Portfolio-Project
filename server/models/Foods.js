const mongoose = require("mongoose");

const FoodsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["lunch", "dinner", "dessert", "drinks"],
  },
});

const Foods = mongoose.model("food", FoodsSchema);

module.exports = Foods;
