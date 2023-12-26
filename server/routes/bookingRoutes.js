const router = require("express").Router()
const bookingController = require("../controllers/bookingController")
const validator = require("../middleware/validator");

router.post("/", validator("booking"), bookingController.booking)

module.exports = router;