const { FavoriteGame } = require("../models");
module.exports = class favGamesController {
    static async myFavGames(req, res, next) {
        try {
            let { id } = req.user;
            let favGames = await FavoriteGame.findAll({ where: { UserId: id } });
            res.status(200).json({ data: favGames });
        } catch (error) {
            next(error)
        }
    }

    static async addFavGame(req, res, next) {
        try {
            let { id } = req.user;
            let favGame = await FavoriteGame.create({
                GameId: req.body.GameId,
                UserId: id
            });
            res.status(201).json({ data: favGame });
        } catch (error) {
            next(error)
        }
    }
}