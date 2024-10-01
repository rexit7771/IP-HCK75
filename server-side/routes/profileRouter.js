const ProfileController = require("../controller/ProfileController");
const profile = require("express").Router();

profile.get("/", ProfileController.getProfile);

module.exports = profile;