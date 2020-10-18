const express = require('express');

const userController = require("./controllers/userController");
const anotationController = require("./controllers/anotationController");
const profileController = require("./controllers/profileController");
const sessionContrller = require("./controllers/sessionController");

const routes = express.Router();

routes.post("/sessions", sessionContrller.create);

routes.get("/users", userController.index);
routes.post("/users", userController.create);

routes.get("/anotations", anotationController.index);
routes.post("/anotations", anotationController.create);
routes.delete("/anotations/:id", anotationController.delete);

routes.get("/search", profileController.search);
routes.get("/profile", profileController.index);

module.exports = routes;