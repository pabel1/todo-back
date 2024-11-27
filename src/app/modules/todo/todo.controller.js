const httpStatus = require("http-status");
const catchAsyncError = require("../../../ErrorHandler/catchAsyncError");
const sendResponse = require("../../../shared/sendResponse");
const todoService = require("./todo.service");

const createTodo = catchAsyncError(async (req, res) => {
  const result = await todoService.createTodoIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Todo created successfully",
    data: {
      result,
    },
  });
});

const getAllTodo = catchAsyncError(async (req, res) => {
  const result = await todoService.getAllTodoFromDB(req);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Todo Get successfully",
    data: {
      result,
    },
  });
});

const categoriesController = {
  createTodo,
  getAllTodo,
};
module.exports = categoriesController;
