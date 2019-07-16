const express = require("express");
const validate = require("express-validation");

const validations = require("./validations");
const boardController = require("../../controllers/board");

const boardRouter = express.Router();

boardRouter
  .get("/:id", validate(validations.get.getById), boardController.getById)
  .get("/all", boardController.getAll)
  .post("/", validate(validations.post.create), boardController.create)
  .put("/:id", validate(validations.put.update), boardController.update)

module.exports = app => {
  app.use("/trelloApi/boards", boardRouter);
};
