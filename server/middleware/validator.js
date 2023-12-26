const { body } = require("express-validator");

const validate = (method) => {
  switch (method) {
    case "booking": {
      return [
        body("firstName")
          .isString()
          .notEmpty()
          .withMessage("first name is required")
          .trim()
          .escape(),
        body("lastName")
          .isString()
          .notEmpty()
          .withMessage("last name is required")
          .trim()
          .escape(),
        body("email")
          .isEmail()
          .withMessage("unvalid email address")
          .notEmpty()
          .withMessage("eamil address is required")
          .normalizeEmail(),
        body("phone")
          .optional()
          .isMobilePhone()
          .isLength({
            min: 9,
            max: 10,
          })
          .withMessage("please enter valid phone number")
          .trim()
          .escape(),
        body("date")
          .isDate()
          .notEmpty()
          .withMessage("booking date is required"),
        body("time")
          .isTime()
          .notEmpty()
          .withMessage("booking time is required"),
        body("numOfPeople")
          .isNumeric()
          .notEmpty()
          .withMessage("number of people is required"),
      ];
    }
  }
};

module.exports = validate;
