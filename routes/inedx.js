const express = require("express");

const todosController = require("./../controller/todos");

const router = express.Router();

router.get("/", todosController.getIndex);

module.exports = router;
