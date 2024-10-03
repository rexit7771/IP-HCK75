const GameController = require("../controller/GamesController");

const games = require("express").Router();

games.get('/', GameController.getAllGames);
games.get('/:id', GameController.getGameById);
games.post("/recommendation", GameController.recommendation)

module.exports = games;
