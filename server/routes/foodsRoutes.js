const router = require("express").Router();
const foodsController = require("../controllers/foodsController");

router.get("/", foodsController.getAllFoods);

module.exports = router;
