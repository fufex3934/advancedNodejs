const express = require("express");
const router = express.Router();
const { userValidation } = require("./../validations");
const validate = require("./../middlewares/validate");
const { authController } = require("./../controllers");
router.post(
  "/auth/register",
  validate(userValidation.createUserSchema),
  authController.register
);

module.exports = router;
