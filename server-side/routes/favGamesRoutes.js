const favGames = require("express").Router();
const favGamesController = require("../controller/FavoriteGameController");

favGames.get("/", favGamesController.myFavGames);
favGames.post("/", favGamesController.addFavGame);

module.exports = favGames;