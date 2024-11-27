const moment = require("moment");
const ErrorHandler = require("../../../ErrorHandler/errorHandler");
const httpStatus = require("http-status");
const TodoModel = require("./todo.model");
const { paginationHelpers } = require("../../../Helper/paginationHelper");
const createTodoIntoDB = async (payload) => {
  const forDateMoment = moment(payload?.forDate);
  const todaysMoment = moment().startOf("day");

  if (forDateMoment < todaysMoment) {
    throw new ErrorHandler(
      `Only Present & Future ToDo Create Available!`,
      httpStatus.BAD_REQUEST
    );
  }
  const todo = new TodoModel(payload);
  const newTodo = await todo.save();
  return newTodo;
};

const getAllTodoFromDB = async (req) => {
  const todo = await TodoModel.find();
  const total = await TodoModel.countDocuments();

  return {
    data: todo,
  };
};

const todoService = {
  createTodoIntoDB,
  getAllTodoFromDB,
};
module.exports = todoService;
