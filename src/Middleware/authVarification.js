const jwt = require("jsonwebtoken");
const UserModel = require("../app/modules/user/user.model");
const config = require("../config/config");

async function authVerification(req, res) {
  const { xToken } = req.body;

  if (!xToken) {
    return res.status(401).json({ message: "Access token is missing" });
  }

  try {

    const decoded = jwt.verify(xToken.value, config.jwt_key);

    const { phone, userId } = decoded;

    const user = await UserModel.findOne({ phone, _id: userId });

    if (!user) {
      console.log("User not found or mismatch");
      return res.status(404).json({ message: "User not found" });
    }

    console.log("User Authenticated:", user);
    return res.status(200).json({ message: "User is authenticated" });
  } catch (error) {
    console.error("Error during token verification:", error);

    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expired" });
    }

    return res.status(500).json({ message: "Server error" });
  }
}

module.exports = authVerification;
