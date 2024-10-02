const { default: axios } = require("axios");
const gemini = require("../helpers/gemini");

module.exports = class GameController {
    static async getAllGames(req, res, next) {
        try {
            let Base_URL = `https://api.rawg.io/api/games?key=${process.env.API_KEY_RAWG}`

            console.log(req.query);
            let { page, page_size, search, developers, publishers, genres, stores, platforms } = req.query;

            if (page) {
                Base_URL += `&page=${page}`
            }
            if (page_size) {
                Base_URL += `&page_size=${page_size}`
            }
            if (search) {
                Base_URL += `&search=${search}`
            }
            if (search_precise) {
                Base_URL += `&search_precise=${search_precise}`
            }
            if (developers) {
                Base_URL += `&developers=${developers}`
            }
            if (publishers) {
                Base_URL += `&publishers=${publishers}`
            }
            if (genres) {
                Base_URL += `&genres=${genres}`
            }
            if (stores) {
                Base_URL += `&stores=${stores}`
            }
            if (platforms) {
                Base_URL += `&platforms=${platforms}`
            }


            let { data } = await axios({
                url: `${Base_URL}`,
                method: 'GET',
            });

            res.status(200).json(data)
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
    // static async get(params) {

    // }

    static async recommendation(req, res, next) {
        try {
            let Base_URL = `https://api.rawg.io/api/games?key=${process.env.API_KEY_RAWG}`
            let { data } = await axios({
                url: `${Base_URL}`,
                method: 'GET',
            });

            // let data = "Samsung"
            let result = await gemini(data, "action");
            res.json(result)
        } catch (error) {
            next(error)
        }
    }
}