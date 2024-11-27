const jwt = require("jsonwebtoken");
const ErrorHandler = require("../ErrorHandler/errorHandler");
const config = require("../config/config");
const jobPromoterModel = require("../app/modules/jobPromoter/jobPromoter.model");

async function promoterAuth(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.split(" ")[1];
  // console.log(token);
  try {
    if (!token || !authorization) {
      throw new ErrorHandler("Please login to access the resource", 401);
    }

    const decoded = jwt.verify(token, config.promoter_key);
    console.log(decoded);
    const { phone, userId } = decoded;
    req.phone = phone;

    const rootUser = await jobPromoterModel.findOne({ phone: phone });
    // console.log(rootUser);
    if (!rootUser) {
      throw new ErrorHandler("User not found", 404);
    }
    req.promoter = rootUser;
    req.promoterID = userId;
    // console.log(req.promoterID);
    next();
  } catch (error) {
    console.log(error);
    next("Authentication Failed!");
  }
}

module.exports = promoterAuth;
