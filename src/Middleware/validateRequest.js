const validateRequest = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body, {
      abortEarly: false, // Return all validation errors, not just the first one
      // stripUnknown: true,    // Remove unknown keys from the data
      // allowUnknown: false,   // Disallow unknown keys by default
      // convert: true,         // Attempt to cast values to the required type
      // presence: 'required',  // Treat all fields as required by default
    });

    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = validateRequest;
