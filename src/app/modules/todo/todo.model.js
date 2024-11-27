const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    todoTitle: {
      type: String,
      require: [true, "Please enter ToDo Title"],
    },
    forDate: {
      type: Date,
      require: [true, "Enter your Date"],
    },
    status: {
      type: String,
      enum: ["Completed", "Incomplete", "Pending", "Ongoing", "Hold"],
      default: "Pending",
    },
    startDate: {
      type: Date,
    },
    dueDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const TodoModel = mongoose.model("todo", todoSchema);

module.exports = TodoModel;
