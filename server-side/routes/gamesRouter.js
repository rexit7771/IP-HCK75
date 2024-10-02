const GameController = require("../controller/GamesController");

const games = require("express").Router();

games.get('/', GameController.getAllGames);


module.exports = games;
