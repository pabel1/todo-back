// const ErrorHandler = require("../ErrorHandler/errorHandler");
// const config = require("../config/config");
// const jwt = require("jsonwebtoken");
// const jobPromoterModel = require("../app/modules/jobPromoter/jobPromoter.model");
// const promoterAuthVerification = async (req, res, next) => {
//   const { authorization } = req.headers;
//   const token = authorization?.split(" ")[1];
//   try {
//     // console.log("first....: ", token);
//     if (!token || !authorization) {
//       throw new ErrorHandler("Please login to access the resource", 401);
//     }

//     const decoded = jwt.verify(token, config.jwt_key);
//     // console.log("decoded....: ", decoded);
//     const { phone, userId } = decoded;
//     // console.log("phone from middleware....:", phone);
//     // console.log("userId from middleware....:", userId);
//     // console.log(userId);
//     // req.phone = phone;

//     const promoter = await jobPromoterModel.findOne({ phone: phone });
//     // console.log("promoter: ", promoter);
//     if (!promoter) {
//       throw new ErrorHandler("Promoter not found", 404);
//     }
//     req.phone = phone;
//     req.userId = userId;
//     next();
//   } catch (error) {
//     // console.log(error);
//     next("Authentication Failed!");
//   }
// };

// module.exports = promoterAuthVerification;
