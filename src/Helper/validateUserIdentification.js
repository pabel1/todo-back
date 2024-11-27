const { NOT_FOUND } = require("http-status");
const UserModel = require("../app/modules/user/user.model");
const ErrorHandler = require("../ErrorHandler/errorHandler");

const validateUserIdentification = async (req, res, next) => {
  try {
    if (req.body.userID) {
      return next();
    }

    if (!req.body.phone) {
      throw new ErrorHandler("Phone number or user ID is required", 400);
    }

    // Find user by phone number
    const user = await UserModel.findOne({
      phone: req.body.phone,
      phoneVerify: true,
    });

    // If no user found, return an error
    if (!user) {
      throw new ErrorHandler("No user found with this phone number", NOT_FOUND);
    }

    req.body.userID = user._id.toString();

    // Remove phone from request body to prevent redundancy
    delete req.body.phone;

    next();
  } catch (error) {
    next(error);
    // throw new ErrorHandler("Error in user identification", 500);
  }
};

module.exports = validateUserIdentification;
