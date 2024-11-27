const jwt = require("jsonwebtoken");

const jwtHandle = async (payload, secret, expireTime) => {
  // console.log(expireTime);
  const token = jwt.sign(
    {
      phone: payload?.phone,
      userId: payload?.id,
    },
    secret,
    {
      expiresIn: expireTime,
      // expiresIn: "60000",
    }
  );
  return token;
};

module.exports = jwtHandle;
