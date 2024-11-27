/* eslint-disable node/no-extraneous-require */
const express = require("express");
const validateRequest = require("../../../Middleware/validateRequest");
const todoValidationSchema = require("./todo.validation");
const categoriesController = require("./todo.controller");

const router = express.Router();

router.post(
  "/create",
  validateRequest(todoValidationSchema),
  categoriesController.createTodo
);
router.get("/get-all", categoriesController.getAllTodo);

const todoRouter = router;

module.exports = todoRouter;
