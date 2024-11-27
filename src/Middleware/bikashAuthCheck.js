const globals = require("node-global-storage");
const {
  generateToken,
} = require("../app/modules/bkashPayment/bkashPayment.service");

const authCheck = async (req, res, next) => {
  let created_at = new Date(globals.get("created_at"));
  let id_token = globals.get("id_token");
  let expires_in = globals.get("expires_in");
  let currentDateTime = new Date();

  if (!id_token) {
    await generateToken();
  } else {
    if (currentDateTime - created_at < expires_in) {
      await generateToken();
    } else {
      console.log("You already have a token !!");
    }
  }
  next();
};

module.exports = authCheck;
