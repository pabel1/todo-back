const Joi = require("joi");

const todoValidationSchema = Joi.object({
  todoTitle: Joi.string().trim().required().messages({
    "string.empty": "Please enter ToDo Title",
  }),
  forDate: Joi.date().required().messages({
    "any.required": "Enter your Date",
  }),
  status: Joi.string()
    .valid("Completed", "Incomplete", "Pending", "Ongoing", "Hold")
    .default("Pending")
    .messages({
      "any.only":
        "Status must be one of: Completed, Incomplete, Pending, Ongoing, Hold",
    }),
  startDate: Joi.date().optional(),
  dueDate: Joi.date().optional(),
});

module.exports = todoValidationSchema;
