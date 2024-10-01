const UserController = require("../controller/UserController");

const user = require("express").Router();


user.post("/", UserController.login);
user.post("/", UserController.login);


module.exports = login;