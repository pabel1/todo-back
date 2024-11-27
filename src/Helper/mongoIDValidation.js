const mongoose = require("mongoose");

const objectId = (value, helpers) => {
  if (!mongoose.Types.ObjectId.isValid(value)) {
    return helpers.error("custom.objectId");
  }
  return value;
};

module.exports = {
  objectId,
};
