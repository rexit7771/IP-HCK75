const { hashing, compare } = require("../helpers/bcrypt");
const { signPayload, verifyToken } = require("../helpers/jwt");

module.exports = class UserController {
    static async login(req, res, next) {
        try {
            res.status(200).json({ message: "Login success" })
        } catch (error) {
            next(error)
        }
    }

    static async register(req, res, next) {
        try {
            res.status(201).json({ message: "User Registered" })
        } catch (error) {
            next(error)
        }
    }
}