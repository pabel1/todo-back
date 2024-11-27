const express = require("express");

const todoRouter = require("../app/modules/todo/todo.route");

const router = express.Router();

const routes = [
  {
    path: "/todo",
    route: todoRouter,
  },
];

routes.forEach((route) => router.use(route.path, route.route));

module.exports = router;
