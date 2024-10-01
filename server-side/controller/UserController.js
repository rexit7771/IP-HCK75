const { hashing, compare } = require("../helpers/bcrypt");
const { signPayload, verifyToken } = require("../helpers/jwt");

module.exports = class UserController {
    static async login(req, res, next) {
        try {

        } catch (error) {
            next(error)
        }
    }
}